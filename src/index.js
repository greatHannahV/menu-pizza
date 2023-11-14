import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
//react v.18
return <h1>Hello React</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
//before v.18
//React.render(<App/>) and remove import ReactDOM from 'react-dom/client';