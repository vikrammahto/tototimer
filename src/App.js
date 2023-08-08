import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import { TodoProvider } from './context/TodoContext';
import Header from './layout/Header';
import SidebarMenu from './layout/SidebarMenu';
import Weather from './components/Weather';
import Pomodoro from './components/Pomodoro';
import MoneyManager from './pages/MoneyManager';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen mx-auto lg:border sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <Header className="sticky top-0 z-50" />
        <div className="flex flex-1 overflow-y-hidden">
          <SidebarMenu className="sticky top-0 z-50" />
          <main className="flex-1 overflow-y-auto">
            <TodoProvider>
              <Routes>
                <Route path="/" element={<Pomodoro />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/task-manager" element={<Todo />} />
                <Route path="/money-manager" element={<MoneyManager />} />
                <Route path="/notes" element={<Notes />} />
              </Routes>
            </TodoProvider>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
