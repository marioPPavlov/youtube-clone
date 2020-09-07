import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SaveIcon from "@material-ui/icons/Save"
import ShareIcon from "@material-ui/icons/Share"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import React from 'react'
import ReactPlayer from "react-player/youtube"
import { useParams } from "react-router-dom"
import { getVideoUrl } from "../../helpers"
import { VideoColumn } from "../VideoColumn"
import "./VideoPage.css"

export function VideoPage(props) {
    const videos = { ...props.videos }
    const id = useParams().id
    const video = videos[id]
    delete videos[id]
    //no error handling for above :)

    return (
        <div className="videoPage">
            <div className="videoPage__videoWrapper">
                <div className="videoPage__player">
                    <ReactPlayer
                        url={getVideoUrl(video.id)}
                        width='100%'
                        height='100%'
                        controls
                    />
                </div>
                <h2 className={"videoPage__title"}>{video.title}</h2>
                <div className="videoPage__info">
                    <div>
                        {video.views}
                    </div>
                    <div>
                        <div>
                            <ThumbUpIcon className={"videoPage__icon"} />
                            {video.likes}
                        </div>

                        <div>
                            <ThumbDownIcon className={"videoPage__icon"} />
                            {video.dislikes}
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
                <VideoColumn videos={videos} />
            </div>
        </div>
    )
}