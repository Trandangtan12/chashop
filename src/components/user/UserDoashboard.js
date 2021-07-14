import React from 'react'
import { isAuthenticate } from '../auth'

const UserDoashboard = () => {
    const {user} = isAuthenticate()
    return (
        <div className="w-[1300px] mx-auto p-40">
           
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p> Thông tin khách hàng</p>
                    <ul className="mt-4">
                <li className="p-4 border border-gray-300">Tên: {user.name}</li>
                <li className="p-4 border border-gray-300">Email: {user.email}</li>
                <li className="p-4 border border-gray-300">Quyền quản trị: {user.role == 1 ? 'Admin' : 'Register user'}</li>
            </ul></div>
                <div>
                <p>Thông tin giỏ hàng</p>
                <ul className="mt-4">
                
            </ul>
                </div>
            </div>
            
        </div>
    )
}

export default UserDoashboard
