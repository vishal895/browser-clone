import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./home.css"

import "./home.css"
import Search from './search';
const Home = () => {
  return (
    <div className="home">
        <div className="home__header">
            <div className="home__headerleft">
                <p>About</p>
                <p>Store</p>

            </div>
            <div className="home__headerright">
                <p>Gmail</p>
                <p>Image</p>
                <AppsIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
        <div className="home__body">
            <img src="https://pngimg.com/uploads/google/google_PNG19636.png"/>
            <div className="home__inputcontainer">
                <Search/>
            </div>
        </div>
    </div>
  )
}

export default Home