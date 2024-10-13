import React from 'react'

export default function GeneralLoading() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
