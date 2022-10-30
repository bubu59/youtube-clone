import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Comment from './Comment.jsx'
import axios from "axios"
import { useSelector } from "react-redux"
import { useLocation } from 'react-router-dom'

const Container = styled.div``

const NewComment = styled.div`
    display: flex;
    align-item: center;
    gap: 20px
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
    color: ${({ theme }) => theme.textSoft}
`
const Publish = styled.div`
    color: ${({ theme }) => theme.textSoft};
    border: 1 px solid ${({ theme }) => theme.soft};
    cursor: pointer
`

const Comments = ({ videoId }) => {
    const { currentUser } = useSelector((state) => state.user)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const path = useLocation().pathname.split("/")[2]

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`/comments/${videoId}`)
            setComments(res.data)
        }
        fetchComments()
    }, [videoId])

    const handleSubmit = async () => {
        try {
            await axios.post(`/comments`, { desc: newComment, userId: currentUser._id, videoId: path })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            {currentUser &&
                <NewComment>
                    <Avatar src={currentUser.img} />
                    <Input placeholder='Add a comment..' onChange={e => setNewComment(e.target.value)} />
                    <Publish onClick={handleSubmit}>Publish Comment</Publish>
                </NewComment>}
            {comments.map(comment => (
                <Comment key={comment._id} comment={comment} />
            ))}
        </Container>
    )
}

export default Comments
