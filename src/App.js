import './App.css';
import Todo from './components/Todo';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <div className="px-5 py-5">
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </div>
    </div>
  );
}

export default App;
