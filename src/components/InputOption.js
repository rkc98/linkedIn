import React from 'react'
import classes from './InputOptions.module.css'
const InputOption = ({Icon,title,color}) => {
    return (
        <div>
            <div className={classes.inputOption}>
                <Icon style={{color:color}} />
                <h4>
                    {title}
                </h4>

            </div>
        </div>
    )
}

export default InputOption
