import Avatar from "@material-ui/core/Avatar"
import React from 'react'
import "./VideoCard.css"

export function VideoCard({
    image, title, channel,
    channelImage, views, timestamp,
}) {
    return (
        <div className="videoCard">
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
        </div>
    )
}