import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const style = {
	fontFamily: "'Balsamiq Sans', cursive",
	margin: '0 5px 0 0',
	fontSize: '10px',
	background: '#3340b5',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 25,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(82, 90, 163)',
};

class Footer extends React.Component {
	// componentDidMount () {
	// 	console.log('componentDidMount');
	// }

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// }

	// componentWillUnmount() {
	// 	console.log('componentWillUnmount');
	// }
	
	render () {
		const { count, id, onClickDeleteAll, onClickFilter /*onClickFilterComplet*/ } = this.props;
		return (
			<div>
				<div className={styles.counter}>
					Осталось выполнить вот столько дел: { count }
				</div>
				<div className={styles.filter}>
					<ButtonGroup color="secondary" aria-label="outlined secondary button group">
						<Button style={style}
								label="all"
								onClick={() => onClickFilter('all')}
						>Все</Button>
						<Button style={style}
								label="active"
								onClick={() => onClickFilter('active')}
						>Активные</Button>
						<Button style={style}
								label="completed"
								onClick={() => onClickFilter('completed')}
						>Выполненные</Button>
					</ButtonGroup>
				</div>
				<div className={styles.delete}
					 onClick={() => onClickDeleteAll(id)}
				>
					<Button 
						style={style} 
						variant="outlined" 
						color="secondary"	
					>
			  				Удалить выполненные дела
					</Button>
				</div>
			</div>);
	}
};

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;
