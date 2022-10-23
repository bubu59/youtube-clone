import React from 'react'
import styled from 'styled-components'
import Youtube from "../img/youtube logo.PNG"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import FeedIcon from '@mui/icons-material/Feed';

const Container = styled.div`
    flex:1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0
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
    cursor: pointer;
    padding: 7.5px 0px
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft}
`
const Login = styled.div`

`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    margin-top: 10px;
    cursor: pointer
`

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom:20px
`

const Menu = ({ darkMode, setDarkMode }) => {
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
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscriptions
                </Item>
                <Hr />
                <Item>
                    <LibraryMusicIcon />
                    Library
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to like videos, comment and subscribe
                    <Button>SIGN IN</Button>
                </Login>
                <Hr />
                <Title>Best of BubuTube</Title>
                <Item>
                    <MusicVideoIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon />
                    Gaming
                </Item>
                <Item>
                    <LocalMoviesIcon />
                    Movies
                </Item>
                <Item>
                    <FeedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsIcon />
                    Settings
                </Item>
                <Item>
                    <FlagIcon />
                    Report
                </Item>
                <Item>
                    <HelpIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <LightModeIcon />
                    Light Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu
