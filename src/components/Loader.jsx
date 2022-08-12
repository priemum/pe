import React from 'react'

const Loader = () => {
  return (
    <div
  className = "container-fluid bg-dark d-flex"
  style={{position: 'absolute', inset: '0', zIndex: '1040'}}
>
  <div className = "spinner-border text-primary m-auto" role="status">
    <span className = "visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Loader