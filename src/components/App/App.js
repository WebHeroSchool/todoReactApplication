import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import styles from './App.module.css';

const style = {
	fontFamily: "'Balsamiq Sans', cursive",
	margin: '0 5px 0 0',
	fontSize: '20px',
	opacity: '0.5',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #f50057 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 25,
    padding: '0 30px',
    boxShadow: '4px 1px 5px #4682B4',
};

const App = () => (
	<Router>
		<div className={styles.wrap}>

			<div>
				<MenuList className={styles.menu}>
			    	<Link to='/' className={styles.link}><MenuItem style={style}>Обо мне</MenuItem></Link>
			        <Link to='/todo' className={styles.link}><MenuItem style={style}>Список дел</MenuItem></Link>
			        <Link to='/contacts' className={styles.link}><MenuItem style={style}>Контакты</MenuItem></Link>
			    </MenuList>    
			</div>

			<div className={styles.tab}>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
				<Route path='/contacts' component={Contacts} />
			</div>
					
		</div>
	</Router>
);

export default App;