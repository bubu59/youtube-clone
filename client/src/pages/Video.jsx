import React from 'react'
import styled from "styled-components"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined"
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined"
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined"

const Container = styled.div`
    display: flex;
    gap: 24px
`

const Content = styled.div`
    flex: 5;
`

const VideoWrapper = styled.div``

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text}
`

const Details = styled.div`
    display:flex;
    aligin-items: center;
    justify-content: space-between
`

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft}
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${({ theme }) => theme.text} 
`

const Button = styled.div`
    display:flex;
    align-items: center
    gap:5px;
    cursor:pointer
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft}
`

const Recommendation = styled.div`
    flex: 2;
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between
`

const ChannelInfo = styled.div``

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 1px solid;
`

const ChannelDetail = styled.div``

const ChannelName = styled.span``

const ChannelCounter = styled.span``

const Desc = styled.p``

const Subscribe = styled.button``

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="Youtube vidoe player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,454 views * Jun 20, 2020</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon /> 123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src="https://i.imgflip.com/6cfndk.jpg" />
                        <ChannelDetail>
                            <ChannelName>Bubu</ChannelName>
                            <ChannelCounter>200k subscribers</ChannelCounter>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Earum voluptates animi sit quos nulla maxime aperiam magni
                                laboriosam quod consectetur iusto qui saepe assumenda, sun
                                t nihil deleniti veritatis cum repellendus.
                            </Desc>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
            </Content>
            <Recommendation>qwdqwwq</Recommendation>
        </Container>
    )
}

export default Video
