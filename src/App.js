import './App.css';
import ProfileIcon from './components/ProfileIcon';
import Preference from './components/Preference';
import Accordion from './components/Accordion';


function App() {
  return (
    <div className="App container mx-auto my-5 grid grid-cols-3 gap-2">
        <ProfileIcon />
        <Preference/>
        <Accordion />
    </div>
  );
}

export default App;
