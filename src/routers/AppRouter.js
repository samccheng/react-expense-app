import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import EditExpense from '../components/EditExpense'
import NotFound from '../components/NotFound'
import AddExpense from '../components/AddExpense'
import Header from '../components/Header'
import { LoginPage } from '../components/LoginPage'

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={LoginPage} exact={true}/>
          <Route path="/dashboard" component={Dashboard} exact={true}/>
          <Route path="/create" component={AddExpense} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )

  export default AppRouter
