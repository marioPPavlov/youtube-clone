import Avatar from "@material-ui/core/Avatar"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SaveIcon from "@material-ui/icons/Save"
import ShareIcon from "@material-ui/icons/Share"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import React from 'react'
import "./VideoInfo.css"

export function VideoInfo({ video }) {
    return (
        <div className="videoInfo">
            <h2 className={"videoInfo__title"}>{video.title}</h2>
            <div className="videoInfo__upper">
                <div>
                    {video.views}
                </div>
                <div>
                    <div>
                        <ThumbUpIcon className={"videoInfo__icon"} />
                        {video.likes}
                    </div>

                    <div>
                        <ThumbDownIcon className={"videoInfo__icon"} />
                        {video.dislikes}
                    </div>
                    <div>
                        <ShareIcon className={"videoInfo__icon"} />
                        <p>SHARE</p>
                    </div>
                    <SaveIcon className={"videoInfo__icon"} />
                    <div>
                        <p>SAVE</p>
                    </div>
                    <MoreHorizIcon />
                </div>
            </div>
            <hr />
            <div className="videoInfo__lower">
                <div className="videoInfo__channel">
                    <Avatar
                        className="videoCard__avatar"
                        alt={video.channel}
                        src={video.channelImage}
                    />
                    <div>
                        <h4>{video.channel}</h4>
                        <p>{video.subscribers} subscribers</p>
                    </div>
                </div>
                <button className="videoInfo__subscribeButton">SUBSCRIBE</button>
            </div>
            <p className="videoInfo__description">{video.description}</p>
        </div>
    )
}