import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setStartExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'

const store = configureStore()

const jsx = (
  <Provider store={store}><AppRouter /></Provider>
)

store.dispatch(setStartExpenses()).then(() => {
  ReactDOM.render(jsx, document.querySelector('#app'))
})
