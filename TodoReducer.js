
const initialData = {
    list: []
}

const TodoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                list: [...state.list,
                {
                    id: id,
                    data: data
                }
                ]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((x) => (x.id !== action.id))
            return {
                list: newList
            }
        case "REMOVE_TODO": return {
            list: []
        }
        default: return state;
    }
}
export default TodoReducer;