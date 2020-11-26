const ADD_TODO = 'ADD_TODO';

export const addTodo = (payload) =>({
    type : ADD_TODO,
    payload,
    id : Math.random(),
});


const DELETE_TODO = 'DELETE_TODO';

export const deleteTodo = (id) =>({
    type : DELETE_TODO,
    id
});

const MARK_COMPLETED = 'MARK_COMPLETED';

export const markCompleted = (...ids) =>({
    type : MARK_COMPLETED,
    id : ids
});

const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const clearCompleted = () =>({
    type : CLEAR_COMPLETED
})

const SHOW_ALL = 'SHOW_ALL';

export const showAll = () =>({
    type : SHOW_ALL
})

const SHOW_ACTIVE = 'SHOW_ACTIVE';

export const showActive = () =>({
    type : SHOW_ACTIVE
})

const SHOW_COMPLETED = 'SHOW_COMPLETED';

export const showCompleted = () =>({
    type : SHOW_COMPLETED
})


