import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"

const VideoCard = ({ video: {
    id: { videoId }, snippet
} }) => {

    return (
        <Card
        sx={{
            width: '300px',
            // width : {
            //     md: '320px', xs: '100%'
            // },
            borderRadius : '15px',
            // boxShadow: "none"
        }}
        >
            <Link
                to={videoId ? `/video/${videoId}` : demoVideoUrl}
            >
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt=""
                    sx={{
                        width: 350, height: 180
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: "#1e1e1e",
                    height: '70px'
                }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant="subtitle1"
                        fontWeight='bold'
                        color='#FFF'
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography
                        variant="subtitle2"
                        fontWeight='bold'
                        color='gray'
                    >
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle
                        sx={{
                            fontSize : 12,
                            color:'gray',
                            ml: '5px'
                        }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card >
    )
}

export default VideoCard