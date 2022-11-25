// import logo from './logo.svg';
import { useDispatch, useSelector } from "react-redux"
import { startAction } from "../actions/indexAction"

export default function ImgRotate(props) {

    const dispatch = useDispatch()
    const selectState = useSelector(state => state.RotateReducer)
    return (
        <>
            <div className="App container my-5">
                <header className="App-header">
                    <img src={props.logo} className={"App-logo" + (selectState ? "" : " App-logo-paused")}
                        alt="logo" onClick={() => dispatch(startAction())} />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
           
        </>
    )
}