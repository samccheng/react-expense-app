import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from '../components/Dashboard'
import EditExpense from '../components/EditExpense'
import NotFound from '../components/NotFound'
import AddExpense from '../components/AddExpense'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true}/>
          <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
          <PrivateRoute path="/create" component={AddExpense} />
          <PrivateRoute path="/edit/:id" component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

  export default AppRouter
