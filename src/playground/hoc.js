// HOC Higher Order Components
// A component that renders another component
// REUSE Code
// Render Hijacking
// Prop Manipulation
// Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info - please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p style={{ color: 'green' }}>You are authenticated!</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p style={{ color: 'red' }}>Please log in to see the message!</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  //   <AdminInfo isAdmin={true} info="My submitted props!" />,
  <AuthInfo isAuthenticated={true} info="My submitted props!" />,
  document.getElementById('app')
)
