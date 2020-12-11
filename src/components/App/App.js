import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		items: [
				{
					value: 'Создать новое приложение',
					isDone: false,
					id: 1
				},
				{
					value: 'прописать props-ы',
					isDone: false,
					id: 2
				},
				{
					value: 'сделать все дела',
					isDone: false,
					id: 3
				}
		],
		count: 3,
		error: false
	};
	
	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({ items: newItemList});
	};

	onClickDelete = id => this.setState(state => ({ items: this.state.items.filter(item => item.id !== id)}));

	onClickAdd = value => {
		if (value !== '') {
			this.setState(state => ({
				items: [
					...state.items,
					{
						value,
						isDone: false,
						id: state.count + 1
					}
				],
				count: state.count + 1,
				error: false
			}));
		} else {
			this.setState(state => ({
				error: true
			}));
		}
	}

	render() {
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem onClickAdd={this.onClickAdd} error={this.state.error} />
				<ItemList 
					items={this.state.items} 
					onClickDone={this.onClickDone}
					onClickDelete={this.onClickDelete} 
				/>
				<Footer count={this.state.count} />
			</div>);
	}
}
export default App;