import React from 'react';
import Swal from 'sweetalert2';
import logo from './logo.svg';
import './App.css';
// class means use render method
class App extends React.Component {
  state = {
    content: '',
    charLimit: 15,
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //event e is an object. target.name is the data
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    //fire alert if content is less than the limit
    if (this.state.content.length <= this.state.charLImit) {
      Swal.fire({ icon: 'success', text: 'Characters inserted successfully' });
    } else {
      Swal.fire({ icon: 'error', text: 'Characters exceeded' });
    }
  };
  render() {
    return (
      <div style={{ textAlign: 'center', height: '100vh' }}>
        <form onSubmit={this.handleOnSubmit} syle={{ marginTop: '50vh' }}>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleOnChange}
          />
          <input
            type="submit"
            disabled={this.state.content.length > 0 ? false : true}
          />
          <h2>
            Remaining Characters:{' '}
            {this.state.charLimit - this.state.content.length}
          </h2>
        </form>
      </div>
    );
  }
}

export default App;

// import './App.css';
// import { Home } from './components/Home';
// import Button from './Button';
// import { Product } from './components/Product';
// import { ProdCategory } from './components/ProdCategory';

// function App() {
//   return (
//     <div className="container">
//       {/* <Home /> */}
//       {/* <Product /> */}
//       <Button />
//     </div>
//   );
// }

// export default App;
