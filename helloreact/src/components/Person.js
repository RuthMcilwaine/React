function Person(props) {
  return (
    <h1>
      Hello from {props.firstName}. I am {props.age} years of age. I live in{' '}
      {props.city}.
    </h1>
  );
}

export default Person;
