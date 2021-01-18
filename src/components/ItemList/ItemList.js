import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ onClickDone, onClickDelete, filterItemList, onUpdateItem }) => (<ul className={styles.list}>
	{filterItemList().map(item => <li key={item.id}>
		<Item 
			value={item.value} 
			isDone={item.isDone} 
			id={item.id} 
			onClickDone={onClickDone}
			onClickDelete={onClickDelete}
			filterItemList={filterItemList}
			onUpdateItem={onUpdateItem}
		/>
	</li>)}
</ul>);

ItemList.defaultProps = {
	items: [
				{
					value: 'задание не добавлено'
				}
	]
};

ItemList.propTypes = {
	items: PropTypes.array
};

export default ItemList;