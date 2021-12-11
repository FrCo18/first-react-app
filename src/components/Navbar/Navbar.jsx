import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    function logout(){
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <div className='.navbar__links'>
                <MyButton>
                    <Link to='/about'>О сайте</Link>
                </MyButton>
                <MyButton>
                    <Link to='/posts'>Посты</Link>
                </MyButton>

                {isAuth === true
                    ?<MyButton onClick={logout}>Выйти</MyButton>
                    :'' }


            </div>
        </div>
    );
};

export default Navbar;