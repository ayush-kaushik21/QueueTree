import React from 'react'
import { Route, Switch } from 'react-router'
import Navbar from './Components/Navbar'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Navbar} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/default' component={Default} />
      </Switch>
    </>
  )
}

export default App
