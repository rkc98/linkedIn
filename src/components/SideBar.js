import { Avatar } from '@material-ui/core'
import React from 'react'
import classes from './SideBar.module.css'
import profileBackground from '../assets/profileBackground.jpg'
 
const SideBar = () => {

    const recentItem=(topic)=>(
            <div className={classes.sidebar__recentItem}>
                <div className={classes.sidebar__hash}>
                    #
                </div>
                <p>{topic}</p>
            </div>
    );
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__top}>
                <img src={profileBackground} alt="" />
                <Avatar />
                <h2>
                    Random Man
                </h2>
                <h4>
                    random@xyz.com
                </h4>
            </div>

            <div className={classes.sidebar__stats}>
                <div className={classes.sidebar__stat}>
                    <p>
                        Who Viewed You
                    </p>
                    <p className={classes.sidebar__statNumber}>
                        1,250
                    </p>

                </div>
                <div className={classes.sidebar__stat}>
                <p>
                        View on Post
                    </p>
                    <p className={classes.sidebar__statNumber}>
                        2000
                    </p>
                </div>
            </div>

            <div className={classes.sidebar__bottom}>
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("Angular")}
                {recentItem("Nodejs")}
                {recentItem("Java")}
                {recentItem("React Native")}

            </div>
            
        </div>
    )
}

export default SideBar
