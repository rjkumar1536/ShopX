import React from 'react';
import {connect} from 'react-redux'
import './Header.css';

import {markCompleted, clearCompleted, showAll, showActive, showCompleted} from '../../redux/action/todo'

const handleMarkCompleted = (props)=>{
   const items =  document.querySelectorAll('.listItem');

   const ids = []
   for(let item of items ){
       let checkbox =  item.querySelector('.listItemCheckBox');
       let tag = item.querySelector('.listItemTag');
       if(checkbox.checked){
        ids.push(tag.id);
       }
   }

   props.dispatch(markCompleted(ids))
}

const handleClearCompleted = (props)=>{
    props.dispatch(clearCompleted());
}

const handleSHowAll = ()=>{

}

const handleSHowActive = ()=>{
    
}

const handleSHowCompleted = ()=>{
    
}
const Header = (props)=>{
    return (
        <div className = "header">
            <div className = "items">
                <p>{props.count} items remaining</p>
            </div>
            <div className = "filter">
                <button onClick = {()=>{handleSHowAll(props)}}>ALL</button>
                <button onClick = {()=>{handleSHowActive(props)}}>ACTIVE</button>
                <button onClick = {()=>{handleSHowCompleted(props)}}>COMPLETED</button>
            </div>
            <div className = "clear">
                <button onClick = {()=>{handleClearCompleted(props)}}>CLEAR COMPLETED</button>
            </div>
            <div className = "mark">
                <button onClick = {()=>{handleMarkCompleted(props)}}>MARK COMPLETED</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    count : state.todos.data.length
})
export default connect(mapStateToProps)(Header)