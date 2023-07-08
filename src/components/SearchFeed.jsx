import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const { searchTerm } = useParams();


  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?parth=snippet&q=${searchTerm}`).then(
      (data) => {
        setVideos(data.items)
      }
    )
  }, [searchTerm])

  return (
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
        Les resultats pour <span
          style={{
            color: '#F31503'
          }}

        >
          {searchTerm}
        </span>
      </Typography>
      <Videos videos={videos} />

    </Box>

  )
}

export default SearchFeed