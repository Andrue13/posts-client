import { CircularProgress, Container, Typography } from '@mui/material'
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import PostsList from './PostsList'
import { PostDTO } from '../@types'
import Post from './Post'
import LinkContext from '../services/linkContext'
import Users from './Users'
import About from './About'
import { Routes } from '../services/routes'
import NotFound from './404'
import Login from './Login'
import useHistory from '../services/historyHook'
import useData from '../services/getDataHook'

type Props = {
    filter: string
}

function Loading() {
    return <CircularProgress />
  }
  

export default function MainComponent({ filter }: Props) {
    const [link, setLink] = useContext(LinkContext)
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(10)
    const [debounceFilter, setDebounceFilter] = useState(filter)
    const debounceTimeout = useRef<number | null>(null)
    const [posts, setPosts, refetch, LoadingPosts] = useData<PostDTO[]>(`/api/posts?skip=${skip}&filter=${debounceFilter}&limit=${limit}`)
    useEffect (() => {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
        debounceTimeout.current = setTimeout(() => {
            setDebounceFilter(filter)
        }, 1000)
    }, [filter])
   

    // const post = useMemo(() => posts.find(post => post.id === postId), [postId, posts])
    useHistory()

    function router() {
        if (link === Routes.MAIN) return LoadingPosts ? <Loading/> :<PostsList posts={posts} />
        if (link === Routes.USERS) return <Users />
        if (link === Routes.ABOUT) return <About />
        if (link === Routes.LOGIN) return <Login />
        const postReg = new RegExp('^/posts/[0-9]+$')
        if (postReg.test(link)) {
            const postId = Number(link.split('/').pop())
            const post = posts.find(post => post.id === postId)
            if (post) return <Post post={post} />
            return <NotFound />
        }
    }
    return (
        <Container maxWidth='lg'>
            {
                router()
            }
        </Container>
    )
}

