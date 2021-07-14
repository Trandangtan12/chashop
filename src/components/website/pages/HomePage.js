import React from 'react'
import Banner from '../Banner'
import CategoryList from '../Category'
// import CategoryList from '../CategoryList'
import List from '../List'

const HomePage = (props) => {
    return (
        <div>
            <Banner />
            {/* <CategoryList {...props}/> */}
            <CategoryList {...props}/>
            <List {...props}/>
        </div>
    )
}

export default HomePage
