import React from 'react';
import './FruitCounter.css'

function FruitCounter({img, fruitName, setFruit, fruit}) {
    return (
        <section>
            <h2>{img} {fruitName}</h2>
            <button
                type="button"
                onClick={() => setFruit(fruit > 0 ? fruit - 1 : {fruit} = 0)}
            >-
            </button>
            {fruit}
            <button
                type="button"
                onClick={() => setFruit(fruit + 1)}
            >+
            </button>
        </section>
    );
}

export default FruitCounter;