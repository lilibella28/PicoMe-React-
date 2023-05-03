import React, { useState, useEffect } from 'react';

const API_KEY = process.env.FOOD_API
const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete';

function FindFood() {
	const [searchTerm, setSearchTerm] = useState('');
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		if (searchTerm !== '') {
			fetch(`${API_URL}?query=${searchTerm}`, {
				method: 'GET',
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
				},
			})
				.then((response) => response.json())
				.then((data) => setIngredients(data))
				.catch((error) => console.error(error));
		}
	}, [searchTerm]);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
			<h1>Ingredients</h1>
			<form onSubmit={(event) => event.preventDefault()}>
				<input type="text" placeholder="Search ingredients..." value={searchTerm} onChange={handleSearch} />
				<button type="submit">Search</button>
			</form>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient.id}>
						<img
							src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
							alt={ingredient.name}
						/>
						<span>{ingredient.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FindFood;
