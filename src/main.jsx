// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
//  import store from '../store/index.js'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider  store={store}>
  
//     <BrowserRouter>
//     <React.StrictMode>
//     <App />
//     </React.StrictMode>
//     </BrowserRouter>
   
 
//   </Provider>
// )

import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { Provider } from 'react-redux';
// import store from '../store/index.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <React.StrictMode>
  
//       <App />
   
//     </React.StrictMode>
//   </Provider>
// );