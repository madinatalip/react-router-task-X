import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="mb-8 text-3xl font-extrabold text-center underline">
        Profile:
      </div>
      <div id="username" className="my-8 text-center underline">
        {user}
      </div>
      <Link to="/dashboard" className="mx-8">
        Go To Root
      </Link>
      <Link to="/dashboard/main" className="mx-8">
        Go To Main
      </Link>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
