import React from 'react';
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
	<div className={styles.delete_icon}>
		<IconButton aria-label="delete">
  	    	<DeleteIcon 
  	    		onClick={() => onClickDelete(id)} />
  	    </IconButton>
	</div>

</div>);

export default Item;