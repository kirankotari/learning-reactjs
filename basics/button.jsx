function Button() {
  const [counter, setCounter] = useState(5);
  const handleClick = () => setCounter(counter+counter);
  return (
    <button onClick={handleClick}>
      {counter}
    </button>
  );
  // babeljs.io
  // return React.createElement("div", null, "Hello World!!!");
}

ReactDOM.render(
<Button />,
// React.createElement(Hello, null),
document.getElementById('mountNode')  
)
