import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
import Button from './Button';
import styles from './App.module.css';
function App() {
  const [loading, seLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.jason())
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <h1>The coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  //console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ur>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ur>
    </div>
  );
}



function Hello() {
  function byeFn() {
    console.log('destroyed :(');
  }
  function hiFn() {
    console.log('created :)');
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function Hello() {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('SEARCH FOR', keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
*/
