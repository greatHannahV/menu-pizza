import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){

return <h1>Hello React</h1>
}


//react v.18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< React.StrictMode ><App/></React.StrictMode>) //oreder componets twice in order to find bugs
//before v.18
//ReactDOM.render(<App/>) and remove import ReactDOM from 'react-dom/client';
