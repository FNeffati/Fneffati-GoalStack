import './App.css';
import GetGoal from './GetGoal.js'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
      <GetGoal />
    </div>
  );
}

export default App;
