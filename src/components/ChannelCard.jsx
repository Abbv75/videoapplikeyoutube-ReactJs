import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ channelDetail }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: "20px",
            }}

        >
            <Link to={`/channel/${channelDetail?.id?.ChannelId}`}>
                <CardContent
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:
                }}
                
                >

                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard