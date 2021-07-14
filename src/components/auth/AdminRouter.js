import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticate } from '.'

const AdminRouter = ({children}) => {
    return (
       <Route render={()=>{
           return isAuthenticate() && isAuthenticate().user.role == 1 ? children : <Redirect to={{pathname: '/signin'}} />
       }} />
    )
}

export default AdminRouter
