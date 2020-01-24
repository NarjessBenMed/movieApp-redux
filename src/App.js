import React from 'react'
import './App.css'
import Home from './Home'
import { Route } from 'react-router-dom'
import MovieDescription from './Components/MovieDescription'
export default function App() {
  return (
    <div>
      <Route  exact path='/' component={Home}/>
      <Route exact path='/:id' component={MovieDescription}/>

    </div>
  )
}
