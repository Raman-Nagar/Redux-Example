import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Updown from './components/Updown';
import ImgRotate from './components/ImgRotate';

function App() {
  return (
    <div className="App">
      <Todo />
    <Updown />
    <ImgRotate logo={logo} />
    </ div>
  );
}

export default App;
