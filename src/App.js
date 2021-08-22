import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex w-screen items-stretch">
        <Main />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
