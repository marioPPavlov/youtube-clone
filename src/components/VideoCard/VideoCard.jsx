import Avatar from "@material-ui/core/Avatar"
import React from 'react'
import { Link } from "react-router-dom"
import { getWatchUrl } from "../../helpers"
import "./VideoCard.css"

export function VideoCard({
    image,
    title,
    channel,
    id,
    channelImage,
    views,
    timestamp,
}) {
    return (
        <div className="videoCard">
            <Link to={getWatchUrl(id)}>
                <img className="videoCard__thumbnail" src={image} alt="" />
                <div className="videoCard__info">
                    <Avatar
                        className="videoCard_avatar"
                        alt={channel}
                        src={channelImage}
                    />
                    <div className="videoCard__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>
                            {views} &#8226; {timestamp}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}