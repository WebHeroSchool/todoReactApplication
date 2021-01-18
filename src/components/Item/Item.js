import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './Item.module.css';

class Item extends React.Component {
	state = {
		inputValue: this.props.value,
		edit: false,
	};
	
	onChangeValue (event) {
		this.setState({ inputValue: event.target.value })
	};

	onSaveEdit (event) {
		this.setState({ edit: false});
		this.props.onUpdateItem(this.state.inputValue, this.props.id);
	};

	render () {
		const { value, isDone, onClickDone, id, onClickDelete } = this.props;

		return (
			<div className={styles.wrap}>
				<div>
					<Checkbox
						checked = { isDone } 
						inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
						onClick={() => onClickDone(id)}
					/>
			    </div>
			    
			    {!this.state.edit && <div className={styles.case}>
					<span className={
							classnames ({
								[styles.item]: true,
								[styles.done]: isDone
							})
						   }
						    onDoubleClick={() => this.setState({ edit: true })}
					>
						{value}
					</span>
				</div>}

				{this.state.edit && <div>
					<input className={styles.input}
						   value={this.state.inputValue}
						   onChange={this.onChangeValue.bind(this)}
						   autoFocus={true}
						   onClick={this.onSaveEdit.bind(this)}></input>
				</div>}

				<div 
					onClick={() => onClickDelete(id)} 
					className={styles.delete_icon}
				>
						<IconButton aria-label="delete">
				  	    	<DeleteIcon />
				  	    </IconButton>
				</div>

			</div>);
	}
};

Item.propTypes = {
	value: PropTypes.string,
	isDone: PropTypes.bool	
};

export default Item;