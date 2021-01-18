import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import styles from './App.module.css';
import { useTranslation } from 'react-i18next';

const style = {
	fontFamily: "'Balsamiq Sans', cursive",
	margin: '0 5px 0 0',
	fontSize: '20px',
	opacity: '0.5',
	background: '#3340b5',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 25,
    padding: '0 30px',
    boxShadow: '4px 1px 5px #4682B4',
};

const App = () => {
	const { t, i18n } = useTranslation();
	const handleClick = lang => {
		i18n.changeLanguage(lang);
	};

	return (
		<Router>
			<div className={styles.wrap}>
		<p>{t('thanks.1')}</p>
		
				<div>
					<MenuList className={styles.menu}>
				    	<Link to='/' className={styles.link}><MenuItem style={style}>Обо мне</MenuItem></Link>
				        <Link to='/todo' className={styles.link}><MenuItem style={style}>Список дел</MenuItem></Link>
				    	<button className={styles.link} onClick={()=>handleClick('en')}>
				    		English
				    	</button>
				    	<button className={styles.link} onClick={()=>handleClick('rus')}>
				    		Русский
				    	</button>
				    </MenuList>    
				</div>

				<div className={styles.tab}>
					<Route path='/' exact component={About} />
					<Route path='/todo' component={Todo} />
				</div>
						
			</div>
		</Router>
	);
};

export default App;