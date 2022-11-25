import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import IncDecReducer from "./IncDecReducer";
import RotateReducer from "./RotateReducer";

const rootReducer = combineReducers({
    TodoReducer,
    IncDecReducer,
    RotateReducer
})
export default rootReducer;