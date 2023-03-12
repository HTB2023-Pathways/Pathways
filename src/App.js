import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import Card from './Components/Card';
import Trailblazer from './Components/Trailblazer';
import Commonpaths from './Components/Commonpaths';
import Careerpath from './Components/Careerpath';
import NextStep from './Components/NextStep';

function App() {
  return (
    <div className="App">
      <Careerpath />
      <Commonpaths />
      <div>Job</div>
      <Input type="job"/>
      <div>Company</div>
      <Input type="company"/>
      <NextStep />
    </div>
  );
}

export default App;
