import React from 'react'

const LoadingIndicator = (props) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        {props.text}
    </div>
  )
}

export default LoadingIndicator