import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const style = {
	fontFamily: "'Balsamiq Sans', cursive",
	margin: '0 5px 0 0',
	fontSize: '10px',
	opacity: '0.5',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #f50057 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 25,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const Footer = ({ count}) => (
	<div>
		<div className={styles.counter}>
			Осталось выполнить вот столько дел: { count }
		</div>
		<div className={styles.filter}>
			<ButtonGroup color="secondary" aria-label="outlined secondary button group">
				<Button style={style}>Все</Button>
				<Button style={style}>Активные</Button>
				<Button style={style}>Выполненные</Button>
			</ButtonGroup>
		</div>
		<div className={styles.delete}>
			<Button style={style} variant="outlined" color="secondary">
	  			Удалить выполненные дела
			</Button>
		</div>
	</div>);

export default Footer;
