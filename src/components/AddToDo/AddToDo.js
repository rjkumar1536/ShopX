import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../../redux/action/todo';
import './AddToDo.css'
const handleToDo = (event, props)=>{
    if(event.keyCode == 13){
        props.dispatch(addTodo(event.target.value));
        event.target.value = '';
    }
}
const AddToDo = (props) =>{
    return (<input type = "text" name = "userInput" placeholder = "What needs to be done ?" onKeyDown = {(event)=>{handleToDo(event,props)}}/>);
}

export default connect()(AddToDo)