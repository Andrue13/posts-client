import React, { useContext } from 'react'
import { PostDTO } from '../@types'
import { Button, Paper, Typography } from '@mui/material'
import LinkContext from '../services/linkContext'
import { Routes } from '../services/routes'

type Props = {
    post: PostDTO,
}

export default function Post({ post }: Props) {
    const [link, setLink] = useContext(LinkContext)
  return (
    <Paper elevation={3} sx={{ 
        minWidth: 275,
        m: '3rem',
        p: '3rem',
        width: '500px'
        }}>
        <Typography variant='h4' component='h1' gutterBottom sx={{
            fontWeight: 500,
            fontSize: '2rem',
            color: 'rgba(0, 0, 0, 0.6)'
        }}>
            {post.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' gutterBottom>
            {post.User.name}
        </Typography>
        <Typography variant='body1' gutterBottom>
            {post.text}
        </Typography>
        <Typography variant='body2' color='text.secondary' gutterBottom>
            Date: {new Date(post.createdAt).toLocaleDateString()}
        </Typography>
        <Button size="medium" sx={{ 
            border: 'revert',
            borderColor: '#1976d2',
        }}
         onClick={() => {
         setLink(Routes.MAIN)
        }}>Back to main</Button>
    </Paper>
  )
}