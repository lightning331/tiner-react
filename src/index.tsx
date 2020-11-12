import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router'
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil'
import { NotFound } from './NotFound'
import { Routes } from './dataStructure'

import reportWebVitals from './reportWebVitals';

interface Props {
  path: Routes
}
const Controller: React.FC<Props> = ({ path }) => <App path={path} />

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <RecoilRoot>
    <Router>
      <Controller path="/" />
      <Controller path="/active" />
      <Controller path="/completed" />
      <NotFound default />
    </Router>
  </RecoilRoot>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
