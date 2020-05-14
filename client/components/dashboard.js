import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="mb-8 text-3xl font-extrabold underline">
        Dashboard
      </div>
      <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF" className="mx-8">
        Go To Profile
      </Link>
      <Link to="/dashboard/main" className="mx-8">
        Go To Main
      </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
