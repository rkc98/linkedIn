import { Avatar } from '@material-ui/core'
import React from 'react'
import classes from './HeaderOptions.module.css'
const HeaderOptions = ({Icon,title,avatar}) => {
    return (
        <div className={classes.HeaderOptions}>
            {Icon && <Icon className={classes.header__icon} />}
            {avatar&& <Avatar className={classes.header__icon} src={avatar}  />}
            <h3 className={classes.HeaderOptions__title}>{title}</h3>
            
        </div>
    )
}

export default HeaderOptions
