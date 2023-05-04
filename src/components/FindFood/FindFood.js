import React, { useState, useEffect } from 'react';
import Map from '../Map/Map';
const API_KEY = process.env.FOOD_API
const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete';

function FindFood() {
	const [searchTerm, setSearchTerm] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (searchTerm !== '') {
			setIsLoading(true);
			setError(null);
			setIngredients([]);

			fetch(`${API_URL}?query=${searchTerm}`, {
				method: 'GET',
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
				},
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error('Something went wrong while fetching the data.');
					}
				})
				.then((data) => {
					if (Array.isArray(data)) {
						setIngredients(data);
					} else {
						throw new Error('The data received from the server is not in the expected format.');
					}
				})
				.catch((error) => {
					console.error(error);
					setError(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [searchTerm]);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
			<h1>Together we fight hunger, reach out and ask for help</h1>
			<form onSubmit={(event) => event.preventDefault()}>
				<input
					className="w-5/6 h-12 mt-6 mb-10 text-center"
					type="text"
					placeholder="Search Products"
					value={searchTerm}
					onChange={handleSearch}
				/>
				<button type="submit">Search</button>
			</form>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			{!isLoading && !error && ingredients.length === 0 && <p>No results found.</p>}
			{/* <div className='grid  grid-rows-6 grid-flow-col  gap-6'>
				{ingredients.map((ingredient) => (
					<div key={ingredient.id}>
						<img
							src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
							alt={ingredient.name}
						/>
						<span>{ingredient.name}</span>
					</div>
				))}
			</div> */}

			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{ingredients.map((product) => (
						<div key={product.id} className="group relative">
							<div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<img
									src={`https://spoonacular.com/cdn/ingredients_100x100/${product.image}`}
									alt={product.name}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href={product.href}>
											<span aria-hidden="true" className="absolute inset-0" />
											{product.name}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.color}</p>
								</div>
								<p className="text-sm font-medium text-gray-900">{product.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Map />
		</div>
	);
}

export default FindFood;
