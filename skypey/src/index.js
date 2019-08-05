import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from "./store";
import * as serviceWorker from './serviceWorker';

const render = () => {
    fancyLog();
    ReactDOM.render(<App />, document.getElementById('root'));
};


render();
store.subscribe(render); //anytile the store is updated the render function is invoked
serviceWorker.unregister();


function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}
