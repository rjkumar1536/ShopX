import './App.css';
import AddToDo from './components/AddToDo/AddToDo'
import Header from './components/Header/Header';
import List from './components/List/List'
function App() {
    return (
       <div className = 'App'>
          <h1>my list</h1>
          <Header />
          <AddToDo />
          <List />
       </div>
      
    )
  
}



export default App;
