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
		count: 3,
		error: false
	};
	
	const [items, setItems] = useState (initialState.items);
  	const [count, setCount] = useState (initialState.count);
  	const [error, setError] = useState (initialState.error);


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
		setItems(newItemList);
	};

	const onClickDeleteAll = id => {
		const newDeleteAll = items.filter(item => item.isDone !== true);
		setItems(newDeleteAll);
		setCount((count) => count - 1 );
	}

	const onClickDelete = id => {
		const newDeleteItem = items.filter(item => item.id !== id);
		setItems(newDeleteItem);
		setCount((count) => count - 1);
	};

	const onClickAdd = value => {
		if (value !== '') {
			setItems ([
					...items,
					{
						value,
						isDone: false,
						id: count + 1
					}
			]);
			setCount((count) => count + 1);
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