import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (x) => {
    console.log(x)
    let id=localStorage.getItem("userid")
  return (
      <Fragment>
        {id? <Fragment>{x.children}</Fragment> : <Navigate to={"/"}/>}
      </Fragment>
  )
}

export default PrivateRoute