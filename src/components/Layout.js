import React from 'react'
import useStyles from './style'

const Layout = () => {

    const classes = useStyles()

    return (
        <div>
            <div classname={classes.right} >Right</div>
            <div className={classes.middle}>Middle</div>
            <div className={classes.left}>Left</div>
        </div>
    )
}

export default Layout
