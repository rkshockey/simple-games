import { Switch, Route } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage'
import Barfight from './components/barfight/Barfight';

function App() {
  return (
    <>
      <h1>Welcome to Electric Horizon Games!</h1>
      <Switch>
        <Route exact path='/'>
          <StartPage />
        </Route>
        <Route path='/barfight'>
          <Barfight />
        </Route>
        <Route path='/rps'>
          
        </Route>
      </Switch>
    </>
  )
}

export default App;
