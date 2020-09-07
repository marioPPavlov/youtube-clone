import React from 'react'
import { VideoRow } from "../VideoRow"
import "./VideoColumn.css"

export function VideoColumn({ videos }) {
    return (
        <div>
            {Object.values(videos).map(v =>
                <VideoRow
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
    )
}