import React, {useState, lazy, Suspense} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import UserContext from './components/Context/userContext';
import AddressContext from './components/Context/addressContext';
const Home = lazy(() => import('./components/Home/index'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const CustomHook = lazy(() => import('./components/CustomHook/ExampleComponent'));
const ContextComponent = lazy(() => import('./components/Context/ExampleContextComponent'));
const Workouts = lazy(() => import('./components/Workouts'));

function App() {
  const [currentUser, setCurrentUser] = useState({name: "Text Context"});
  const [currentAddress, setCurrentAddress] = useState({address: "169 La Trobe St."});

  const handleCurrentUser = (name) => {
    setCurrentUser({name});
  }
  
  const handleCurrentAddress = (address) => {
    setCurrentAddress({address});
  }

  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/customhook" component={CustomHook} />
          <UserContext.Provider value={{name: currentUser.name, onNameChange: handleCurrentUser}}>
            <AddressContext.Provider value={{address: currentAddress.address, onAddressChange: handleCurrentAddress}}>
              <Route path="/context" component={ContextComponent} />
            </AddressContext.Provider>
          </UserContext.Provider>
          <Route path="/workouts" component={Workouts} />
          <Route exact path="/" component={Home} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
