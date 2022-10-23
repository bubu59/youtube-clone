import React from 'react'
import styled from 'styled-components'
import Youtube from "../img/youtube logo.PNG"
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
    flex:1;
    background-color: #202020;
    height: 100vh;
    color: white;
    font-size: 14px
`

const Wrapper = styled.div`
    padding: 18px 26px
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px
`

const Img = styled.img`
    height: 25px
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer
`

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={Youtube} alt="" />
                    BubuTube
                </Logo>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu
