import React from 'react'

const FetchError = ({ message, onRetry}) => (
  <div>
    <p style={{color: 'red'}}>Could not fetch todos. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
)

export default FetchError
