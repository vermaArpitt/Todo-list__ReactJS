import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {

  let todos = [{sno : 1, title : "Buy Aux Cable"},
  {sno : 2, title : "Submit Assignment"},
  {sno : 3, title : "Study AI"}];

  return (
    <>
    <Header title = "My To-do List"/>
    <Todos todos = {todos}/>
    <Footer/>
    </>
  );
}

export default App;
