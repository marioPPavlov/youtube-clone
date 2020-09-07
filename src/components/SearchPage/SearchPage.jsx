import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import React from 'react'
import { useParams } from "react-router-dom"
import { VideoColumn } from "../VideoColumn"
import "./SearchPage.css"

export function SearchPage({ videos }) {
    const item = useParams().item
    const filtered = Object.values(videos).filter(v => v.title.toLowerCase().includes(item.toLowerCase()))
 
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <VideoColumn videos={filtered} />
        </div>
    )
}