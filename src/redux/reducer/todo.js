const initialState = {
    data : []
}

const todos = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {...state, data : [...state.data, {
                msg : action.payload,
                id : action.id,
                state : 'active'
            }]}
        case 'DELETE_TODO' :
            const todo = state.data.filter((item) => item.id != action.id)
            return {...state, data : [...todo]}
        case  'MARK_COMPLETED' :
            let todos = state.data.slice();
            for(let id in action.id){
                let item = todos.find((todo)=> todo.id == id)
                if(todos.state == 'active'){
                    todos.state = 'complete';
                }
            }
            return {...state, data: [...todos]}
        case 'CLEAR_COMPLETED':
            let task = state.data.filter((item) => item.state != 'complete')
            return {...state, data : [...task]}
        default:
            return state;
    }
}

export default todos;