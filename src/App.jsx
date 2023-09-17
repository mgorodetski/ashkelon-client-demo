import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Museum from "./pages/museum/Museum";
import Contacts from "./pages/contacts/Contacts";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="container">
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId" component={Single}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/museum" component={Museum}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
