import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setStartExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
import { firebase } from './firebase/firebase'

const store = configureStore()
const jsx = (
  <Provider store={store}><AppRouter /></Provider>
)
let hasRendered = false
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#app'))
    hasRendered = true
  }
}



firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid))
    store.dispatch(setStartExpenses()).then(() => {
    renderApp()
    if(history.location.pathname === '/') {
      history.push('/dashboard')
    }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
