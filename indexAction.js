export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    }
}
export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

export const Inc = () => {
    return {
        type: "INCREASE"
    }
}
export const Dec = () => {
    return {
        type: "DECREASE"
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

export const startAction = () => {
    return {
        type: "rotate",
    }
}

