import './App.css';
import  TaskList  from './Components/TaskList/TaskList';
import  AddTask  from './Components/AddTask/AddTask';
import DoneTasks from './Components/DoneTasks/DoneTasks'

function App() {
  return (
    <div className="App">
      <div>
      <AddTask/>
      </div>
      <TaskList/>
      <DoneTasks/>
    </div>
  );
}

export default App;