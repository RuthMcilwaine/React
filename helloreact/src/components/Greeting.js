//functional component
function Greeting(props) {
  //let name = 'Dhitaj';
  // inspect on chrome console
  console.log(props);
  return <h1>Hello from {props.firstName}</h1>;
}

export default Greeting;
