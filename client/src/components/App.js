import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import Topnav from './Topnav'
import Home from './Home'
import Login from './Login' 
import Register from './Register'
import ErrorPage from './ErrorPage'

const App = () => {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    axios.post('/api/checkToken')
         .then( ({data}) => data.error? setUser(null) : setUser(data))
         .catch( (error) => console.log('Error checking cookies') ) 
  }, []) 
    
  return (
    <>
      <Topnav user={user}/>
      <Switch>
        <Route exact path='/' render={() => <Home user={user}/>} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/error' component={ErrorPage} />
      </Switch>
    </>
  )
}

export default App;