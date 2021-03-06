import React, {Component} from 'react'
import Axios from 'axios'

import EachQuestion from "./EachQuestion"

import NoQuest from "./NoQuest"

class CategoryQuest extends Component{
    constructor(props){
        super(props)
        this.state = {
            category: this.props.match.params.category,
            allQuestion : [],
            isDataReturned: false
        }
    }

    componentDidMount(){
        Axios.get(`http://${window.location.hostname}:5005/quora/question/category/`+this.state.category).then(allQuest => {
            console.log(allQuest);
            this.setState({
                allQuestion: allQuest.data,
                isDataReturned: true
            })
        }).catch(error => {
            console.log("Axios error")
            console.log(error)
        })
    }
    

    render(){
        return(                
            this.state.isDataReturned ?             
                <div>
                    {this.state.allQuestion.map((data, index) => {
                        return(
                            <EachQuestion question={{"eachQuest": data}}/>
                            
                        )
                    })}
                    
                </div>
            : <NoQuest />
        )
    }
}

export default CategoryQuest;