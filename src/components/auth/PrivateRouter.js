import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticate } from '.'

const PrivateRouter = ({children}) => {
    return (
       <Route render={()=>{
           return isAuthenticate() ? children : <Redirect to={{pathname: '/signin'}} />
       }} />
    )
}

export default PrivateRouter
