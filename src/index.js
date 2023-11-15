import React from 'react';
import ReactDOM from 'react-dom';

const pizzaData = [{
        name: "Focaccia",
        ingredients: "Bread with Italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozzarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozzarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozzarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="spinaci" />
            <h1>Pizza</h1>
            <p>Tomato, mozzarella, ham, arugula, and burrata cheese</p>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( < App / > );
