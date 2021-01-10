import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		items: [
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
		count: 3, //активные
		countCompleted: 0, //выполненные
		countAll: 3, //все
		error: false,
		filter: 'all'
	};
	
	const [items, setItems] = useState (initialState.items);
  	const [count, setCount] = useState (initialState.count);
  	const [countAll, setCountAll] = useState (initialState.countAll);
  	const [countCompleted, setCountCompleted] = useState (initialState.countCompleted);
  	const [error, setError] = useState (initialState.error);
  	const [filter, setFilter] = useState (initialState.filter);


  	useEffect(() => {
  		console.log('error update');
  		return () => {
  			console.clear()
  		}
  	}, [error]);

  	useEffect(() => {
  		console.log('update');
  	});

  	useEffect(() => {
  		console.log('mount');
  	}, []);

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

	const onClickFilter = (filter) => {
		let filterItemList = (filter) => {
			if (filter === 'active') {
				return items.filter(item => item.isDone === false);
			} if (filter === 'completed') {
				return items.filter(item => item.isDone === true);
			} else {
				return items;
			}
		};
		
		setFilter(filterItemList);
	};

	// const onClickFilter = (name) => {
	// 	let filterItemList;
	// 	switch(name) {
	// 		case 'all':
	// 			filterItemList = items;
	// 			break;
	// 		case 'active':
	// 			filterItemList = items.filter(item => item.isDone === false);
	// 			break;
	// 		case 'completed':
	// 			filterItemList = items.filter(item => item.isDone === true);
	// 			break;
	// 	}

	// 	setFilter(filterItemList);
	// };

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
		if (value !== '') {
			const newItemList = [
					...items,
					{
						value,
						isDone: false,
						id: count + 1
					}
			];
			setItems (newItemList);
			setCount((count) => count + 1);
			setCountAll((countAll) => countAll + 1);
		} else {
			setError (true);
			}
	};
		
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem onClickAdd={onClickAdd} error={error} />
				<ItemList 
					items={items} 
					onClickDone={onClickDone}
					onClickDelete={onClickDelete} 
				/>
				<Footer 
					count={count}
					onClickDeleteAll={onClickDeleteAll}
					onClickFilter={onClickFilter}
				/>
			</div>);
};


Todo.defaultProps = {
	isDone: false
};

Todo.propTypes = {
	  isDone: PropTypes.bool,
	  id: PropTypes.number
};

export default Todo;