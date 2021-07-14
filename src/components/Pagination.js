import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <ul className="flex justify-center">
         {pageNumbers.map(number => (
          <li >
            <button className="text-black py-1 px-4 border border-gray-300" onClick={()=>paginate(number)}>{number}</button>
          </li>
         ))}
         </ul>
    )
}

export default Pagination
