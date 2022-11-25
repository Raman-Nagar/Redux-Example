import { useDispatch, useSelector } from "react-redux"
import { Dec, Inc } from "../actions/indexAction"

export default function Updown() {

    const dispatch = useDispatch()
    const selectState = useSelector(state => state.IncDecReducer)
    return (
        <>
            <button className="btn btn-info" onClick={() => dispatch(Dec())} >-</button>
            <input type="text" value={selectState} />
            <button className="btn btn-info" onClick={() => dispatch(Inc())}>+</button>
        </>
    )
}