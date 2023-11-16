import React from 'react'
import ReactDOM from 'react-dom'
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
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <div className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozzarella, ham, arugula, and burrata cheese'
        photoName='pizzas/spinaci.jpg'
        price={10}
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

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />

      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>
      <span>{props.price * 3}</span>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  return (
    <footer className='footer'>
      <h3>{new Date().toLocaleTimeString()} </h3>
      <h4>
        {hour >= openHour && hour <= closeHour
          ? 'We are open'
          : 'We are closed'}
      </h4>
    </footer>
  )
  //   return React.createElement('footer', null, `We're currently open`)
}

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(<App />)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( < App / > );
