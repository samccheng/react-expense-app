import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import HelpPage from '../components/HelpPage'
import EditExpense from '../components/EditExpense'
import NotFound from '../components/NotFound'
import AddExpense from '../components/AddExpense'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true}/>
          <Route path="/create" component={AddExpense} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )

  export default AppRouter
