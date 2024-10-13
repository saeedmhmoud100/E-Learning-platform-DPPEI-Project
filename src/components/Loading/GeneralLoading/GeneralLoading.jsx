import React from 'react'

export default function GeneralLoading({takeHeight}) {
  return (
    <div className={`d-flex justify-content-center align-items-center ${takeHeight && takeHeight}`}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
