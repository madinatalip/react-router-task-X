import React from 'react'

import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center bg-pink-200 h-screen">
        <div className="bg-pink-600 text-white font-bold rounded-lg border rounded-full h-20 w-20 flex items-center justify-center shadow-lg p-20">
          This is dummy component
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
