import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => {
        setVideoDetail(data.items[0]);
      }
    )

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id]);

  if (!videoDetail?.snippet) return 'En cour de chargement...';
  if (!videos) return 'En cour de chargement...';
  // if (!videos?.snippet) return 'En cour de chargement...';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail;

  return (
    <Box
      sx={{
        height: 'calc(100% - 140px)',
        overflowY: 'auto',
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: 'row',

        }}
        sx={{
          height: '100%',
          width: '100%',
          display:'flex',
          justifyContent:'center',


        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: '140px',
            width:'70%'
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className='react-player'
            controls
          />
          <Typography
            variant='h5'
            fontWeight='bold'
            p={2}
            color='#fff'

          >
            {title}
          </Typography>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{
              color: '#fff'
            }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography
                variant={{
                  sm: 'subtille1',
                  md: 'h6'
                }}
                color="#fff"
              >
                {channelTitle}
                <CheckCircle
                  sx={{
                    fontSize: '12px',
                    color: 'gray',
                    ml: '5px'
                  }}
                />
              </Typography>
            </Link>

            <Stack
              direction='row'
              gap='20px'
              alignItems='center'
            >
              <Typography
                variant='body1'
                sx={{
                  opacity: 0.7
                }}
              >
                {parseInt(viewCount).toLocaleString()} Vues
              </Typography>

              <Typography
                variant='body1'
                sx={{
                  opacity: 0.7
                }}
              >
                {parseInt(likeCount).toLocaleString()} J'aimes
              </Typography>
            </Stack>

          </Stack>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
          sx={{
            height: '100%',
            overflowY: 'scroll'
          }}
        >
          {
            videos != null ?
              <Videos videos={videos} direction='column' /> :
              <Typography
                variant='h2'
                color='#fff'
              >
                En cour de chargement
              </Typography>
          }

        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail