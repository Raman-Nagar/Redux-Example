const InicialState = true;

const RotateReducer = (state = InicialState, action) => {
    if (action.type == "rotate") {
        return (state == true) ? false : true;
    }
    else {
        return state;
    }
}
export default RotateReducer;