import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import HistoryIcon from "@material-ui/icons/History"
import HomeIcon from "@material-ui/icons/Home"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import React from 'react'
import { SidebarRow } from "../SidebarRow"
import "./Sidebar.css"



export function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected={true} Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videoes" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="ShowMore" />
            <hr/>
        </div>
    )
}