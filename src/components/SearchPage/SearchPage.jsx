import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import React from 'react'
import { VideoRow } from "../VideoRow"
import "./SearchPage.css"

export function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
                <hr/>

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
    )
}