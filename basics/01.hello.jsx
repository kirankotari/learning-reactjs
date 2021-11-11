function Hello() {
  return <div>Hello World..!</div>;
  // babeljs.io
  // return React.createElement("div", null, "Hello World!!!");
}

ReactDOM.render(
<Hello />,
// React.createElement(Hello, null),
document.getElementById('mountNode')  
)
