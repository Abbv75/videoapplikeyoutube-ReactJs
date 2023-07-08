import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Recommendation');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?parth=snippet&q=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items)
      }
    )
  }, [selectedCategory])

  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: 'unset',
        height: 'calc(100% - 140px)',
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            // md: "100%"
          },
          borderRight: "1px solid #3d3d3d",
          width: {
            xs: "fit-content",
          },
          px: {
            sx: 0,
            md: 2
          }
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{
            mt: 1.5,
            color: "#fff"
          }}
        >
          Projet Technolab ISTA
        </Typography>

      </Box>

      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '100%',
          padding: '0px 16px',
          flex: 2
        }}

      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white'
          }}

        >
          Videos de <span
            style={{
              color: '#F31503'
            }}
          >
             {selectedCategory}
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed