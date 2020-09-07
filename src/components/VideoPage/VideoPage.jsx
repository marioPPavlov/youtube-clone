import React, { useEffect } from 'react'
import ReactPlayer from "react-player/youtube"
import { useParams } from "react-router-dom"
import { getVideoUrl } from "../../helpers"
import { VideoColumn } from "../VideoColumn"
import { VideoInfo } from "../VideoInfo"
import "./VideoPage.css"

export function VideoPage(props) {
    const videos = { ...props.videos }
    const id = useParams().id
    const video = videos[id]
    delete videos[id]
    //no error handling for above :)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToTop()
    }, [video])

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
                <VideoInfo video={video}/>
            </div>
            <div className="videoPage__rows">
                <VideoColumn videos={videos} />
            </div>
        </div>
    )
}