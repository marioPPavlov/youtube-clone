import React from 'react'
import { VideoCard } from "../VideoCard"
import "./RecommendedVideos.css"

export function RecommendedVideos({ videos }) {
    return (
        <div className="recommendedVideos">
            <div className="recommendedVidoes__videos">
                {Object.values(videos).map(v =>
                    <VideoCard
                        key={v.id}
                        id={v.id}
                        title={v.title}
                        views={v.views}
                        timestamp={v.timestamp}
                        channel={v.channel}
                        image={v.image}
                        channelImage={v.channelImage}
                    />
                )}
            </div>
        </div>
    )
}
