import React from 'react'

const MyButton = ({children, ...props}) => {
    return (
        <div {...props}>{children}</div>
    )
}

export default MyButton