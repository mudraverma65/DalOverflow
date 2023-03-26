import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import UserLoggedIn from './UserLoggedIn';
import SearchBar from './SearchBar';

const ProfileLink = styled(Link)`
    background: #FFD401;
    border-radius: 10px;
    color: #00000;
    line-height: 55px;
    text-decoration: none;
    display: inline-block;
    padding: 0 20px;
    margin-right: 5px;

`;

function Header(){
    const {user} = useContext(UserLoggedIn)
    return(
        <div className='jsBeginnerWantToInsertTeParent'>
            <div className='Header'>
                <div className='LogoCol'>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faLayerGroup} size="3x" color='#ffd401' />
                        <div class='LogoText'><span>DalOverflow</span></div>
                    </Link>
                </div>
                <SearchBar/>
                {user && (
                    <ProfileLink to={'/profile'} className="profile">{user.userName}</ProfileLink>
                )}

                {!user && (
                    <div className='LoginHeader'>
                        <Link to={'/login'}>
                            <div class="button1" >Login</div><span> </span>
                        </Link>
                        <Link to={'/registration'}>
                            <div class="button1" >Register</div>
                        </Link>    
                    </div>

                )}      
            </div>
        </div>
    );
}

export default Header;