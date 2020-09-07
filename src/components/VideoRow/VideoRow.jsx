import React from 'react'
import { Link } from "react-router-dom"
import { getWatchUrl } from "../../helpers"
import "./VideoRow.css"

export function VideoRow({
    id,
    views,
    timestamp,
    channel,
    title,
    image
}) {
    return (
        <div className="videoRow">
            <Link className={"videoRow__linkWrapper"} to={getWatchUrl(id)} >
                <img src={image} alt="" />
                <div className="videoRow__text">
                    <h3>{title}</h3>
                    <p className="videoRow__headline">
                        {channel} • {views} • {timestamp}
                    </p>
                </div>
            </Link>
        </div>
    )
}