import React from 'react'

const HomeScreen = (props: { name: string }) => {
    return (
        <div>
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
        </div>
    )
}

export default HomeScreen
