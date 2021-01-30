import './App.css';
import GetGoal from './GetGoal.js'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Goals from './components/Goals'

import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <GetGoal />
    </div>
  );
}

export default App;
