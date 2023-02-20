import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const HeaderStyle = styled.header`
    background-color: #393939;
    display: grid;
    grid-template-columns: 200px 1fr 200px;
`;

const Logo = styled.a`
    color: #fff;
    text-decoration: none;
    display: inline-block;
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
    color: #fff;
    line-height: 55px;
    text-decoration: none;
    display: inline-block;
`;

const Search = styled.input`
    display: inline-block;
    width: 90%;
    border:2px solid #999;
    margin-top: 9px;
    margin-left: 16px;
    padding: 10px 6px;
    background: rgba(0,0,0,.1);
`;


function Header(){
    return(
        <HeaderStyle>
            <Logo href="" className="logo">
                <FontAwesomeIcon icon={faLayerGroup} size="2x" />
            <span> Dal<b>Overflow</b></span>
            </Logo>
            <form action="" className="Search">
                <Search type="text" placeholder="Search Questions"/>
            </form>
            <ProfileLink href="" className="profile">Login</ProfileLink>
        </HeaderStyle>
    );
}

export default Header;