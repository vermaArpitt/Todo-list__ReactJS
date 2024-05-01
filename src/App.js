import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([{sno : 1, title : "Buy Aux Cable"},
  {sno : 2, title : "Submit Assignment"},
  {sno : 3, title : "Study AI"}]);

  const onDelete = (todo) => {
    setTodos(todos.filter((x) => {
      return x !== todo;
    }))
  };

  return (
    <>
    <Header title = "My To-do List"/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
