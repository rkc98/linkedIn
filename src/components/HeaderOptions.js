import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import classes from './HeaderOptions.module.css'
const HeaderOptions = ({Icon,title,avatar,onClick}) => {
    return (
        <div className={classes.HeaderOptions} onClick={onClick}>
            {Icon && <Icon className={classes.header__icon} />}
            {avatar&& <Avatar className={classes.header__icon} > lg </Avatar>}
            <h3 className={classes.HeaderOptions__title}>{title}</h3>
            
        </div>
    )
}

export default HeaderOptions
