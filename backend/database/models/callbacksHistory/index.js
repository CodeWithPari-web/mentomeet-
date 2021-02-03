import mongoose from '../../connect.js'

const Schema = mongoose.Schema
const model = mongoose.model


const CallbackHistorySchema = new Schema({
    menteeId:{
        type: String,
        required: true
    },
  menteeName:{
	  type: String,
       required: true
  },
  mentorName:{
	  type: String
  },
   category:{
        type: String,
        required: true
    },
    query:{
        type: String,
        required: true
    },
	applicationDate: {
		type: Date,
		default: Date.now
	},
	status:{
		type:String,
		default:'pending'
	},
	approvedBy:{
		type:String,
		default:'none'
	},
	selectedDate:{
		type:Date,
		required:true
	},
	selectedTime:{
		type:Date
	},
	MeetLink:{
		type:String
	}
})


const History = model('callback', CallbackHistorySchema);

export default History;