import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
<div className={styles.wrap}>

	<div>
		<Checkbox 
			inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
			onClick={() => onClickDone(id)}
		/>
    </div>
    <div className={styles.case}>
		<div className={
			classnames ({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}>
			{value}
		</div>
	</div>
	<div onClick={() => onClickDelete(id)} className={styles.delete_icon}>
		<IconButton aria-label="delete">
  	    	<DeleteIcon />
  	    </IconButton>
	</div>

</div>);

Item.propTypes = {
	value: PropTypes.string,
	isDone: PropTypes.bool	
};

export default Item;