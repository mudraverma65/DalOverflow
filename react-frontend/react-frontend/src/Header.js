import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import UserLoggedIn from './UserLoggedIn';

const HeaderStyle = styled.header`
    padding-top: 8px;
    padding-bottom: 8px;
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    background: #000000;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    line-height: 35px;
    padding: 8px 15px;
    span{
        display: inline-block;
        padding-left: 5px
    }
    b{
        font-weight: bold;
    }
`;
const ProfileLink = styled.a`
    background: #FFD401;
    border-radius: 10px;
    color: #00000;
    line-height: 55px;
    text-decoration: none;
    display: inline-block;
`;

const Search = styled.input`
    background: #222222;
    display: inline-block;
    width: 90%;
    border:1px solid #ffd401;
    height: 40px;
`;


function Header(){
    const {user} = useContext(UserLoggedIn)
    return(
        <HeaderStyle>
            <Logo to={'/'} className="logo">
                <FontAwesomeIcon icon={faLayerGroup} size="2x" />
            <span> Dal<b>Overflow</b></span>
            </Logo>
            <form action="" className="Search">
                <Search type="text" placeholder="Search Questions"/>
            </form>
            {user && (
                <ProfileLink to={'/profile'} className="profile">Saumya</ProfileLink>
            )}
            {!user && (
                <div>
                    <ProfileLink to={'/login'} className="profile">Log in</ProfileLink>
                    <ProfileLink to={'/registration'} className="registration">SignUp</ProfileLink>

                </div>

            )}
        </HeaderStyle>
    );
}

export default Header;