import React from 'react';

function Cards({ title, text }) {
	return (
		<div className="card my-card">
			<div className="card-body  d-flex flex-column">
				<h5 className="card-title">{title}</h5>
				<p  style={{textAlign:'left', lineHeight:'1.7'}}className="card-text">{text}</p>
			</div>
		</div>
	);
}

export default Cards;
