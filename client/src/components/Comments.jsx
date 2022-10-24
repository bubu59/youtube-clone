import React from 'react'
import styled from "styled-components"
import Comment from './Comment.jsx'

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
    width: 100%
`

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://i.imgflip.com/6cfndk.jpg" />
                <Input placeholder='Add a comment..' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments
