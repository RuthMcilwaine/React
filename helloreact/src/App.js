import React from 'react';
// import Swal from 'sweetalert2';
import './App.css';
import Greeting from './components/Greeting';
import Greeting1 from './components/Greeting1';
import Person from './components/Person';
import Message from './components/Message';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import ClickComponent from './components/ClickComponent';

// class means use render method
function App() {
  return (
    <div>
      {/* //passing a prop name */}
      <ClickComponent />
      <Counter />
      <Message />
      <Greeting firstName="Arin" />
      <HelloWorld />
      <Greeting1 firstName="Class" />
      <Person firstName="Ruth" age="30" city="Melbourne" />
    </div>
  );
}
export default App;
