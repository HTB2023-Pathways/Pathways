import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <div>Job</div>
      <Input type="job"/>
      <div>Company</div>
      <Input type="company"/>

    </div>
  );
}

export default App;
