import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		items: JSON.parse(localStorage.getItem('items')) || [
				{
					value: 'cоздать новое приложение',
					isDone: false,
					id: 1
				},
				{
					value: 'прописать props-ы',
					isDone: false,
					id: 2
				},
				{
					value: 'помыть машину',
					isDone: false,
					id: 3
				}
		],
		count: JSON.parse(localStorage.getItem('count')) || 3, //активные
		countCompleted: JSON.parse(localStorage.getItem('countCompleted')) || 0, //выполненные
		countAll: JSON.parse(localStorage.getItem('countAll')) || 3, //все
		error: JSON.parse(localStorage.getItem('error')) || false,
		filterItems: JSON.parse(localStorage.getItem('filterItems')) || 'all'
	};
	
	const [items, setItems] = useState (initialState.items);
  	const [filterItems, setFilterItems] = useState (initialState.filterItems);
  	const [count, setCount] = useState (initialState.count);
  	const [countAll, setCountAll] = useState (initialState.countAll);
  	const [countCompleted, setCountCompleted] = useState (initialState.countCompleted);
  	const [error, setError] = useState (initialState.error);
  	
  	// useEffect(() => {
  	// 	console.log('error update');
  	// 	return () => {
  	// 		console.clear()
  	// 	}
  	// }, [error]);

  	// useEffect(() => {
  	// 	console.log('update');
  	// });

  	// useEffect(() => {
  	// 	console.log('mount');
  	// }, []);

  	useEffect(() => {
  		localStorage.setItem('items', JSON.stringify(items));
  	});
  	useEffect(() => {
  		localStorage.setItem('count', JSON.stringify(count));
  	});
  	useEffect(() => {
  		localStorage.setItem('countCompleted', JSON.stringify(countCompleted));
  	});
  	useEffect(() => {
  		localStorage.setItem('countAll', JSON.stringify(countAll));
  	});
  	useEffect(() => {
  		localStorage.setItem('error', JSON.stringify(error));
  	});
  	useEffect(() => {
  		localStorage.setItem('filterItems', JSON.stringify(filterItems));
  	});

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});

		const newCount = newItemList.filter(newItem => newItem.isDone === false).length;
		const newCountCompleted = newItemList.filter(newItem => newItem.isDone !== false).length;
		const newCountAll = newItemList.length;

		setItems(newItemList);
		setCount(newCount);
		setCountCompleted(newCountCompleted);
		setCountAll(newCountAll);
	};

	const filterItemList = () => {
			if (filterItems === 'active') {
				return items.filter(item => item.isDone === false);
			} if (filterItems === 'completed') {
				return items.filter(item => item.isDone === true);
			} else {
				return items;
			}
		};

	const onClickFilter = (element) => {
		setFilterItems(element);
	};

	const onClickDeleteAll = id => {
		const newDeleteAll = items.filter(item => item.isDone === false);
		const newCount = newDeleteAll.length;
		const newCountAll = newDeleteAll.length;

		setItems(newDeleteAll);
 		setCount(newCount);
		setCountCompleted(0);
		setCountAll(newCountAll);
	};

	const onClickDelete = id => {
		const newDeleteItem = items.filter(item => item.id !== id);

		const newCount = newDeleteItem.filter(newItem => newItem.isDone === false).length;
		const newCountCompleted = newDeleteItem.filter(newItem => newItem.isDone !== false).length;
		const newCountAll = newDeleteItem.length;

		setItems(newDeleteItem);
		setCount(newCount);
		setCountCompleted(newCountCompleted);
		setCountAll(newCountAll);
	};

	const onClickAdd = value => {
		if (value === '' || items.some((item) => value === item.value)) {
 			setError (true);
		} else {
			const newItemList = [
					...items,
					{
						value,
						isDone: false,
						id: count + 1
					}
			];
			setError (false);
			setItems (newItemList);
			setCount((count) => count + 1);
			setCountAll((countAll) => countAll + 1);
		}
	};

	const onUpdateItem = (value, id) => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.value = value;
			}
			return newItem;
		});
		setItems(newItemList);
	};

	return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem onClickAdd={onClickAdd} error={error} />
				<ItemList 
					onClickDone={onClickDone}
					onClickDelete={onClickDelete}
					filterItemList={filterItemList}
					onUpdateItem={onUpdateItem} 
				/>
				<Footer 
					count={count}
					onClickDeleteAll={onClickDeleteAll}
					onClickFilter={onClickFilter}
				/>
			</div>
	);
};

Todo.defaultProps = {
	isDone: false
};

Todo.propTypes = {
	  isDone: PropTypes.bool,
	  id: PropTypes.number
};

export default Todo;