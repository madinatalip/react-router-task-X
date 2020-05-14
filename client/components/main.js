import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="mb-8 text-3xl font-extrabold underline">
        Main
      </div>
      <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF" className="mx-8">
        Go To Profile
      </Link>
      <Link to="/dashboard" className="mx-8">
        Go To Root
      </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
