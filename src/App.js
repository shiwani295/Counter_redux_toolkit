import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Navheader from "./components/Navheader";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      <header className="App-header">
        {isAuth && <Navheader />}
        <Auth />
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
//this is task 11 of expenxe tracker  where all do with reduxtoolkit
//task 12 integrating redux with react (increment or decrement by 2)
//task 13 subscribing and dispatching action increment decrement by 5
//task 15 login authentication
