
/*import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
 import registerServiceWorker from './registerServiceWorker';

 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();*/

 const appState = {
     title:{
         text: '123123',
         color: 'red',
     },
     content:{
         text: '32131231',
         color: 'blue'
     }
 }

 function createStore(state,stateChanger){

     const listeners = []
     const subscribe = (listener) => listeners.push(listener)
     const getState = () => state
     const dispatch = (action) => {
         stateChanger(state,action)
         listeners.forEach((listener)=>listener())}
     return {getState,dispatch,subscribe}

 }

function stateChanger(state,action){
     switch (action.type){
         case 'UPDATE_TITLE_TEXT':
             return{
                 ...state,
                 title:{
                     ...state.title,
                     text: action.text
                 }
             }
             break
         case 'UPDATE_TITLE_COLOR':
             return{
                 ...state,
                 title:{
                     ...state.title,
                     color:action.color
                 }
             }
             break
         default:
             return state
     }
}

 function renderApp (appState) {
     renderTitle(appState.title)
     renderContent(appState.content)
 }

 function renderTitle (title) {
     const titleDOM = document.getElementById('title')
     titleDOM.innerHTML = title.text
     titleDOM.style.color = title.color
 }

 function renderContent (content) {
     const contentDOM = document.getElementById('content')
     contentDOM.innerHTML = content.text
     contentDOM.style.color = content.color
 }

const store = createStore(appState,stateChanger)
store.subscribe(() => renderApp(store.getState()))

renderApp(store.getState());

store.dispatch({type:'UPDATE_TITLE_TEXT',text:'6768686876867'})
store.dispatch({type:'UPDATE_TITLE_COLOR',color:'pink'})




