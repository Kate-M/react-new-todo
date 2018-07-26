import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';

const appContainer = window.document.querySelector('.AppContainer');

ReactDOM.unmountComponentAtNode(appContainer);

ReactDOM.render(
   <App />,
   appContainer
);

