import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import Card from './Components/Card';
import Trailblazer from './Components/Trailblazer';
import Commonpaths from './Components/Commonpaths';

function App() {
  return (
    <div className="App">
      {/* <Input /> */}
      <Commonpaths />
      <div>Job</div>
      <Input type="job"/>
      <div>Company</div>
      <Input type="company"/>

    </div>
  );
}

export default App;
