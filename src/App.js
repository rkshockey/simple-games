import { Switch, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'
import StartPage from './components/StartPage'

const Title = styled.h1`
  text-align: center;
`

function App() {
  return (
    <>
      <Title>Welcome to Electric Horizon Games!</Title>
      <Switch>
        <Route exact path='/'>
          <StartPage />
        </Route>
      </Switch>
    </>
  )
}

export default App;
