import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Profile from './profile'
import Main from './main'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center bg-pink-200 h-screen">
        <div className="bg-pink-600 text-white font-bold rounded-lg border shadow-lg p-10">
          <Route exact path="/dashboard" component={() => <Dashboard />} />
          <Route exact path="/dashboard/main" component={() => <Main />} />
          <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
