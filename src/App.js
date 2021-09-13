import "./App.css";
import { Switch, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Home from "./pages/Home";
import { members } from "./members";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clientes e Fornecedores</h1>
        <Switch>
          <Route path="/customer/:id">
            <Customer members={members} />
          </Route>
          <Route path="/company/:id">
            <Company members={members} />
          </Route>
          <Route path="/">
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;