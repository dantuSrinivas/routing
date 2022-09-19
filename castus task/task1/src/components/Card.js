/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Card = ({ events }) => {
    return (
        <div className="events">
            <img src='https://www.promoteproductions.com/wp-content/uploads/2018/03/video-1364122_960_720-1.png' />
            <h5>{events.eventName}</h5>
            <h5>{events.eventDescription}</h5>
        </div>
    )
}

export default Card