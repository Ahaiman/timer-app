
import React, {useState, useEffect} from "react";
import randomcolor from "randomcolor";
import StartReset from "./StartReset"
import "./Body.css"

function Body( { chosenTime }){

  
    const timing = chosenTime
    let [ count, setCount ] = useState( timing );
    const [ color, setColor ] = useState("");
    const [ isActive, setIsActive ] = useState( false );

    const doneStyle = {
        color : "Red",
        font: "small-caps bold 35px Georgia"
       
    };

    const numberStyle = {
        color: color,
        font: "bold 60px Georgia"

    };

    function toggle(){
        setIsActive( !isActive);
    }

    function reset(){
        setCount(timing);
        setIsActive(false);
    }

    function refresh(){
            window.location.reload(); 
    }

    useEffect(() => {
        let intervalId = null;
        if(isActive && count >=0) {
            intervalId = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
            setColor(randomcolor());
        }
        else if(isActive && count < 0){
            clearInterval(intervalId);
            setCount(0);
            setIsActive(false);
        }
        return () => clearInterval(intervalId);
    }, [count, isActive]);
    

    return (
        <div>
            <h1 style= {  numberStyle  }> 
                {  !isActive && count === 0 ? 
                    <p style = { doneStyle }> Times Up!  </p> 
                      : count }
             </h1> 
            <StartReset toggle = { toggle } reset = { reset } isActive = { isActive } refresh = { refresh }/>
        </div>
    )
}



export default Body