import React from 'react';
import {connect} from 'react-redux'
import './Header.css';

import {markCOmpleted, clearCompleted, showAll, showActive, showCompleted} from '../../redux/action/todo'

const handleMarkCompleted = ()=>{

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
                <button>ALL</button>
                <button>ACTIVE</button>
                <button>COMPLETED</button>
            </div>
            <div className = "clear">
                <button onClick = {()=>{handleClearCompleted(props)}}>CLEAR COMPLETED</button>
            </div>
            <div className = "mark">
                <button>MARK COMPLETED</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    count : state.todos.data.length
})
export default connect(mapStateToProps)(Header)