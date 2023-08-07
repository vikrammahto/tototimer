import './App.css';
import Todo from './components/Todo';
import { TodoProvider } from './context/TodoContext';
import Header from './layout/Header';
import SidebarMenu from './layout/SidebarMenu';

function App() {
  return (
    <div className="flex flex-col h-screen mx-auto lg:border sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <Header className="sticky top-0 z-50" />
      <div className="flex flex-1overflow-y-hidden">
        <SidebarMenu className="sticky top-0 z-50" />
        <main className="flex-1 px-5 overflow-y-auto">
          <TodoProvider>
            <Todo />
          </TodoProvider>
        </main>
      </div>
    </div>
  );
}

export default App;
