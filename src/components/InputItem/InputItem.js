import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styleField = {
	fontFamily: "'Balsamiq Sans', cursive",
	width: '100%',
	margin: '0 0 5px 0',
};

const styleButton = {
	fontFamily: "'Balsamiq Sans', cursive",
	fontSize: '10px',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 25,
    padding: '0 30px',
    background: '#3340b5',
    boxShadow: '0 3px 5px 2px rgba(82, 90, 163)',
};

class InputItem extends React.Component {
	state = {
		inputValue: '',
	};

	onButtonClick = () => {
		this.props.onClickAdd(this.state.inputValue.toLowerCase());
		this.setState({ 
			inputValue: ''
		});
	};

	render () {
		const fieldError = this.props.error;
		let errorForm;
		if (fieldError) {
			errorForm = 'Ошибка: поле для ввода не может быть пустым или такая задача уже существует'
		} else {
			errorForm = ''
		}

		return (
			<div>
				<div className={styles.wrap}>
					<div className={styles.form}>
						{ errorForm }
					</div>
				</div>
				<div className={styles.field}>
					<TextField
						style={styleField} 
						id="standard-basic" 
						label="Добавить задание"
						value={this.state.inputValue.toUpperCase()}
						onChange={event => this.setState({ inputValue: event.target.value })}
					/>
				</div>
				<div>
					<Button 
						variant="contained" 
						color="secondary"
						style={styleButton}
						onClick={this.onButtonClick}
					>
				    	Добавить
				    </Button>
				</div>
			</div>);
		}
}
export default InputItem;