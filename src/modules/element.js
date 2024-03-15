import { render } from "@testing-library/react";
import { useState } from "react";

function Element(props) {

    const last = props.last;
    const [newTask, setTask] = useState("");

    function changeRequest(e){
        setTask(e.target.value);
    }
    function handleClick(e){
        if(newTask != ""){
            props.adder(newTask);
            setTask("");
        }
    }
 
        const renderLastElement = (
                <div id={props.id} key={props.id} className={`addtask glass`}>
                <input className="content" maxLength="70" type="text" placeholder="Task" value={newTask} onChange={changeRequest} />
                <div className="ctm-btn glass" onClick={handleClick}>+</div>
                </div> 
        );

        const renderElement = (
            <div id={props.id} key={props.id} className={`task ${props.done}`} >
            <label className="checker">
                <input type="checkbox" checked={props.done} onChange={() => props.updateList(props.id)}/>
                <div className="ctm-check glass"></div>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </label>            
            <div className="content glass">{props.content}</div>            
            <div className="delete ctm-btn glass" onClick={() => props.remover(props.id)}>&#215;</div>
            </div>           
        );

    return (

       <div>{last ? renderLastElement : renderElement}</div>

    );
  }
  
  export default Element;