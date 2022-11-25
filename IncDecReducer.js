const InicialState = 0;

const IncDecReducer = (state = InicialState, action) => {
    if(action.type=="INCREASE"){
        return state+1;
    }
    else if(action.type=="DECREASE"){
        return state-1;
    }
    else {
        return state;
    }
}
export default IncDecReducer;