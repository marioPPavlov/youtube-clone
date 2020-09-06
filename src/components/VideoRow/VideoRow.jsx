import React from 'react'
import "./VideoRow.css"

export function VideoRow ({ 
    views,
    timestamp,
    channel,
    title,
    image
 }) {
    return (
        <div className="videoRow">
            
            <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} • {views} • {timestamp}
                </p>
            </div>
        </div>
    )
}