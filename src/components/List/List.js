import React from 'react';
import { connect } from 'react-redux';
import {deleteTodo, deleteToDo} from '../../redux/action/todo'
import './List.css'

const handleOnClick = (event,props)=>{
    props.dispatch(deleteTodo(event.target.id))
}

const List = (props)=>{
  return ( 
    <div >
         <ul onClick = {(event)=>{handleOnClick(event, props)}} className = "list" >
            { 
                props.todos.map((todo,index)=>
                (<div className = "listItem"><input type = "checkbox" className = "listItemCheckBox" />
                <li key = {index} id = {todo.id} className = "listItemTag">{todo.msg}</li></div>)
                )
            }
        </ul>
    </div>    
  );
};

const mapStateToProps = (state)=>({
    todos : state.todos.data
});


export default connect(mapStateToProps)(List)