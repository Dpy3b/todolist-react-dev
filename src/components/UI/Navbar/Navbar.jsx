import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from './../../../context/index';
import { useContext } from 'react';
const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext); // состояние для состояния аутентификации

	// функция для лоаута
	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	
	return (
		<div className="navbar">
			<MyButton onClick={logout}>Выйти</MyButton>
			<div className="navbar__links">
				<NavLink to="/todolist-react-dev/about">О сайте</NavLink>
				<NavLink to="/todolist-react-dev/posts">Посты</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
