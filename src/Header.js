
import React, { Component } from "react"
import PressButton from "./Components/ButtonPress"
import Text from "./Components/Text"
import Body from "./Components/Body"

class Header extends Component{
    constructor(){
        super()
        this.state = {
            chosenTime : 0,
            press : false
        }
        this.myChangeHandler = this.myChangeHandler.bind(this)
        this.myPressHandler = this.myPressHandler.bind(this)
    }

    myChangeHandler(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    myPressHandler(event){
        this.setState({press : true})
    }

    render (){
        return(
            <div>
                <Text myChangeHandler =  {this.myChangeHandler} name = "chosenTime"/>
                <PressButton handlePress = {this.myPressHandler}/>
                {this.state.press && <Body chosenTime = {this.state.chosenTime} /> }
            </div>
        )}
}


export default Header
