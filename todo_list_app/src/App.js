// import logo from './logo.svg';
import "./App.css";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
// import TodoItem from './MyComponents/TodoItem';
import Todos from "./MyComponents/Todos";

function App() {
  return (
    <div className="App">
      <Header title="Todo List" searchBar={true} />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
