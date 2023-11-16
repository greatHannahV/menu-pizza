import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with Italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozzarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozzarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozzarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozzarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozzarella, ham, arugula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  // const style = { color: 'blue', fontSize: '38px' }
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length //never have num, only binar.
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzas && numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.</p>
      )}

      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozzarella, ham, arugula, and burrata cheese'
        photoName='pizzas/spinaci.jpg'
        price={10}
         // ingredients={pizza.ingredients}
            // photoName={pizza.photoName}
            // price={pizza.price}
      />
      <Pizza
        name='Pizza Margherita'
        ingredients=', ham, arugula, and burrata cheese'
        photoName='pizzas/margherita.jpg'
        price={15}
      /> */}
    </main>
  )
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null
  return (
    <li className='pizza'>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
      </div>
      <span>{pizzaObj.price}</span>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour < closeHour

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00{' '}
        </p>
      )}
      {/* <h3>{new Date().toLocaleTimeString()} </h3>
      <h4>
        {hour >= openHour && hour <= closeHour
          ? 'We are open'
          : 'We are closed'}
      </h4> */}
    </footer>
  )
  //   return React.createElement('footer', null, `We're currently open`)
}
function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or order online!</p>
      <button className='btn'>Order</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(<App />)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( < App / > );
