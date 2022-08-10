import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/list/List";
import Refhook from "./components/Refexample/Refhook";
import About from "./container/departments/About";
import Appointment from "./container/departments/Appointment";
import Contact from "./container/departments/Contact";
import Departments from "./container/departments/Departments";
import Doctors from "./container/departments/Doctors";
import List_Apt from "./container/departments/List_Apt";
import Home from "./container/home/Home";
import Login from "./container/Login";
import Medicine from "./container/medicine/Medicine";
import PublicRoute from "./public-route/PublicRoute"
import PrivateRoute from "./private-route/PrivateRoute"

function App() {
  return (  
    <>
    <Header/>
    
    <Switch>
      <PublicRoute path="/" exact component={Home}/>
      <PublicRoute path="/departments" exact component={Departments} />
      <PublicRoute path="/doctors" exact component={Doctors}/>
      <PublicRoute path ="/about" exact component={About}/>
      <PublicRoute path = "/contact" exact component={Contact}/>
      <PublicRoute path ="/login" restricted={true} exact component={Login}/>
      <PublicRoute path ="/medicine" exact component={Medicine}/>
      <PublicRoute path= "/refhook" exact component={Refhook}/>
      <PrivateRoute path="/appointment" exact component={Appointment}/>
      <PrivateRoute path="/list" exact component={List_Apt}/>
    </Switch>

    <Footer/>
    </>
    

  );
}

export default App;
