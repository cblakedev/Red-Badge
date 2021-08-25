import './App.css';
import {Films} from './films'
import React, { Component } from 'react';

class App extends Component { //class component
  render() {
    return (
      <div className='App'>
        <Films fname='Chris' hobby={'Coding'}/>
      </div>
    )
  }
}

// function App() {  //functional component
//   return (
//     <div className="App">
//       <Films />
//     </div>
//   );
// }

export default App;
