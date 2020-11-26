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
        default:
            return state;
    }
}

export default todos;