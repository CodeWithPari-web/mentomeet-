import express from 'express';
import dotenv from 'dotenv'
import User from '../../../database/models/users/index.js'
import History from '../../../database/models/callbacksHistory/index.js'
import Announcement from '../../../database/models/announcements/index.js'
import {CalculateWeeks,Between} from '../../helpers/chartHandler/Calculation.js'

const router = express.Router();

function admin_check(req, res, next) {
    // API_KEY in body parameters in needed
    console.log("Admin check");

    if (req.body.API_KEY) {
        console.log("API Key Provided", req.body.API_KEY);
        console.log("API Key is", '9950874706-7744822894');

        // Change this API key and most probable store it in an environment variable
        if (req.body.API_KEY === '9950874706-7744822894') { //process.env.API_KEY
            return next();
        } else {
            console.log("Incorrect API key")
            var err = new Error('Wrong API Key Provided');
            err.status = 404;
            return next(err);
        }

    } else {
        console.log("NO API Key provided");
        var err = new Error('No API Key Provided');
        err.status = 404;
        return next(err);
    }
}

router.post('/admin/users', admin_check, function (req, res) {
    /**
     * TAKE care of API_KEY check
     * Required Params
     *  skip: The number to skip to, for example if skip(40) then start from 41
     *  limit: The limit the number of user you want to
     * 
     * Default to 1 to 20 if not provided params
     * 
     * Return
     *  The data in json form of each user (See Users schema)
     * 
     * Returns an empty array if no user found 
     */
    console.log("Admin route!");

    let bodySkip = req.body.skip;
    let bodyLimit = req.body.limit;

    if (!bodySkip) {
        bodySkip = 0;
    }

    if (!bodyLimit) {
        bodyLimit = 20;
    }

    // console.log(bodySkip, bodyLimit);
    // MongoDB call
    User.find({}).sort({ role : -1}).skip(bodySkip).limit(bodyLimit).then(result => {
        // console.log(result);
        return res.json(result);
    }).catch(err => {
        return next(err);
    });
});

router.post('/admin/nusers', admin_check, (req, res) => {
    /**
     * Provides the current nummber of users
     * Stored in the Users doc
     * 
     * Params: API_KEY needed to make a request
     * 
     * return: error or { count: number_of_users (int) }
     */
    User.count({}, function(error, result) {
        if (error) {
            var err = new Error('Error');
            err.status = 404;
            return next(err);
        } else {
            return res.json({count: result});
        }
    });
});

// by ABD

router.post('/admin/announcements', admin_check, (req, res) => {

    let newEvent = new Announcement(req.body)
    console.log("newEvent is ")
    console.log(newEvent)
    
    newEvent.save((err, event)=>{
        if(err){
            let errorMessage = err
            console.log(errorMessage)
            return res.status(400).json({
                errorMessage : errorMessage
            })
        }

        res.json(event)   
    })
    
})

router.get('/admin/announcements/fetch', (req, res) => {
    Announcement.find((err,result)=>{
        if(err){
            let errorMessage = err
            console.log(errorMessage)
            return res.status(400).json({
                errorMessage : errorMessage
            })
        }
        console.log(result)

        res.json(result)
    })
})

/* Added By DG */
/* Todays Callback Request History */
router.post('/admin/callbacks/daily/:YEAR/:MONTH/:DAY',admin_check,(req,res) => {
	console.log(req.params);
	let DATE = new Date();
	let year = parseInt(req.params.YEAR) || DATE.getFullYear();
	let month = parseInt(req.params.MONTH) || DATE.getMonth() + 1;   
	let day = parseInt(req.params.DAY) || DATE.getDate();

	console.log(year,month,day)
	
	History.find({applicationDate:{$gte:`${year}-${month}-${day}`,$lte:`${year}-${month}-${day+1}`}}).then(doc => {
		console.log(doc);
		return res.json({'info':doc});
	})
	.catch(err => console.log(err));
	
		
});

router.post('/admin/callbacks/weekly/:YEAR/:MONTH/:DAY',admin_check,(req,res) => {
	console.log(req.params);
	let DATE = new Date();
	let year = parseInt(req.params.YEAR) || DATE.getFullYear();
	let month = parseInt(req.params.MONTH) || DATE.getMonth() + 1;   
	let day = parseInt(req.params.DAY.padStart(2,0)) || DATE.getDate();

	console.log(year,month,day)
	
	let weeksNumberList = []; //list of week start and end number [1,7,8,14]
	let weekArray = CalculateWeeks(year,month); // {name,min,max}
	
 	weekArray.forEach(el => {
		weeksNumberList.push(el.min);
		weeksNumberList.push(el.max);
	}); 
	
	console.log(weekArray);	
	let data;
	console.log(`Btw ${year}-${month}-01 and`);
	console.log(`${year}-${(month != 12)?month+1:'01'}-01`);
	console.log(`${(month != 12)?month+1:'01'}`);
	History.find({applicationDate:{$gte:`${year}-${month}-01`,$lte:`${(month != 12)?year:year+1}-${(month != 12)?month+1:1}-01`}}).then(doc => {
		console.log('------------------Revieved Data');
		console.log(doc);
		data = doc;
		console.log(data);
		console.log('------------------ Data Above');
		let MyWeekInfo = [];  //will contain separated data for each week
		for(let i=0,j=0;i<weeksNumberList.length;j++){
			let index = i;
		    if(weeksNumberList[index+1]){
				MyWeekInfo[j] = data.filter(obj => {
					try{	
						console.log(obj)
						return Between(obj.applicationDate.getDate(),weeksNumberList[index],weeksNumberList[index+1]); 
					}catch{e => {
						console.log('error');
						 throw e;
					}
					}
				});
			}
			else{
				console.log('last element')
			}
			i+=2;
		}	
		
		for(let index in MyWeekInfo){
			console.log(MyWeekInfo[index]);
			const list = MyWeekInfo[index].map(obj => {
				console.log(obj)
				return {...obj._doc}
			});
			weekArray[index]['list'] = list;
		}
		console.log('weekarray');
		console.log(weekArray[2].list); //{name,min,max,list:'it contain information for particular week'}
		console.log(weekArray[3].list); //{name,min,max,list:'it contain information for particular week'}
		return res.json({'info':data,'weekInfo':weekArray});
	})
	.catch(err => console.log(err)); 
})

/* Ends here */


export default router;



