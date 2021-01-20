import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';

// import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import styles from './App.module.css';

const style = {
	fontFamily: "'Balsamiq Sans', cursive",
	margin: '0 5px 0 0',
	fontSize: '20px',
	opacity: '0.5',
	background: '#3340b5',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
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
			    	<div className={styles.menu__img}>		
						<a href='https://webheroschool.ru'><img className={styles.img} alt='' src="https://sun9-55.userapi.com/c855036/v855036349/1c61bd/_CWqoHo5nH0.jpg" /></a>
					</div>
			    </MenuList>    
			</div>

			<div className={styles.tab}>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
			</div>
					
		</div>
	</Router>
);

export default App;