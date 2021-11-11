function Display(props) {
  return <div>{props.message}</div>;
}
function Button(props) {
  
  return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
  // babeljs.io
  // return React.createElement("div", null, "Hello World!!!");
}

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
    </>
  );
}

ReactDOM.render(
<App />,
// React.createElement(Hello, null),
document.getElementById('mountNode')  
)
