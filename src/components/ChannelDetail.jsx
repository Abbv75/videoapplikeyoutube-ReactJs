import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(
      (data) => setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id])

  return (
    <Box
      sx={{
        height: 'calc(100% - 140px)',
        overflowY: 'scroll'
      }}
    >
      <Box>
        <div
          style={{
            background: 'linear-gradient(45deg, rgba(150, 200, 247, 1) , rgba(150, 30, 184, 1) )',
            zIndex: 10,
            height: '200px',
            marginBottom: '-100px'
          }}
        >
        </div>
        <p align='center'>
          <ChannelCard channelDetail={channelDetail} />
        </p>
      </Box>

      <Box
        display="flex"
        p={2}

      >
        <Box
          sx={{
            mr:{
              sm:'100px'
            }
          }}
        />
          <Videos videos={videos} />

      </Box>
    </Box>
  )
}

export default ChannelDetail