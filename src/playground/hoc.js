import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <p>info: {props.info}</p>
  </div>
)

const withAdmin = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>HOC</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>you must be logged in</p> }
    </div>
  )
}

const AdminInfo = withAdmin(Info)
const AuthInfo = requireAuthentication(Info)



// ReactDOM.render(<AdminInfo isAdmin={false} info="this is info"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is info"/>, document.getElementById('app'))
