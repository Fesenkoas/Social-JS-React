import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './script/script.js'

const postData=[
  {id:1, massage: "hi",likesCount: 15},
  {id:2, massage: "how are you?", likesCount: 5}
];
const dialogData =[
  {id:1, name: 'dimich'},
  {id:2, name: 'sveta'},
  {id:3, name: 'valera'},
  {id:4, name: 'nasty'},
  {id:5, name: 'sasha'}
]
const messageData=[
{id:1, massage: 'Hi'},
{id:2, massage: "how are you?"},
{id:3, massage: "im fine"},
{id:4, massage: 'Hi'},
{id:5, massage: 'Hi'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postData} massage={messageData} user={dialogData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
