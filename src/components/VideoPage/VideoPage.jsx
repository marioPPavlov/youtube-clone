import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SaveIcon from "@material-ui/icons/Save"
import ShareIcon from "@material-ui/icons/Share"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import React from 'react'
import ReactPlayer from "react-player/youtube"
import { VideoRow } from "../VideoRow"
import "./VideoPage.css"

export function VideoPage({
    title, url, views,
    likes, dislikes,
}) {
    return (
        <div className="videoPage">
            <div className="videoPage__videoWrapper">
                <div className="videoPage__player">
                    <ReactPlayer
                        url={url}
                        width='100%'
                        height='100%'
                        controls
                    />
                </div>
                <h2 className={"videoPage__title"}>{title}</h2>
                <div className="videoPage__info">
                    <div>
                        {views}
                    </div>

                    <div>
                        <div>
                            <ThumbUpIcon className={"videoPage__icon"} />
                            {likes}
                        </div>

                        <div>
                            <ThumbDownIcon className={"videoPage__icon"} />
                            {dislikes}
                        </div>
                        <div>
                            <ShareIcon className={"videoPage__icon"} />
                            <p>SHARE</p>
                        </div>
                        <SaveIcon className={"videoPage__icon"} />
                        <div>
                            <p>SAVE</p>
                        </div>

                        <MoreHorizIcon />
                    </div>
                </div>
                <hr />
            </div>
            <div className="videoPage__rows">

                <VideoRow
                    title="Cute and Funny Cat Videos to Keep You Smiling! 🐱"
                    views="4.5M views"
                    timestamp="4 months ago"
                    channel="Rufus"
                    image="https://i.ytimg.com/vi/tpiyEe_CqB4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDmdQFh5fvOwGTCZ0yeG_Gy-eXemg"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyoJPSB2w_XrUUmkW2QhWxGifWrpUr5eJJjKCkQ=s88-c-k-c0xffffffff-no-rj-mo"
                />

                <VideoRow
                    title="Funny DOGS, prepare yourself to CRY WITH LAUGHTER! - Best DOG VIDEOS"
                    views="6.1M views"
                    timestamp="1 year ago"
                    channel="Tiger Productions"
                    image="https://i.ytimg.com/vi/BRMK77NUsyU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZGJhtP7YFCr3E8hqRP6vY_7jDGg"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzoRfw15Mr9QjKzE96xY-mubAtJUYSMvKDDYX2m7g=s88-c-k-c0xffffffff-no-rj-mo"
                />
            </div>
        </div>
    )
}