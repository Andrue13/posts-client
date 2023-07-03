import {  PostDTO } from '../@types'
import { Box, Typography } from '@mui/material'
import PostCard from './PostCard'

type Props = {
    posts: PostDTO[]
}

export default function PostsList({posts}: Props) {
    
  return (
    <Box component='section'>
      <Typography variant='h1' sx={{
                fontSize: '3rem'
            }}>Posts
            </Typography>
        {
            posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))
        }
    </Box>
  )
}