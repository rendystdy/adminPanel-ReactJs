import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./Redux/Reducer/GlobalReducer";

// store
// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>,
//   document.getElementById("root")
// );
ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
