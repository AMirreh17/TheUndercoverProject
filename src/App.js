import logo from './logo.svg';
import Appbar from './Appbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Appbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is a test build for "The Undercover Project"
        </p>
     
        
        
      </header>
      <footer>The Undercover Project - 2024</footer>
    </div>
  );
}

export default App;
