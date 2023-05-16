import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BuyFlowScreen from './screens/BuyFlowScreen'
import UserInfoProvider from './contexts/UserInfoProvider'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <UserInfoProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route path="/buy/:productId" component={BuyFlowScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </div>
      </Router>
    </UserInfoProvider>
  )
}

export default App
