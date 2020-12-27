import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = this.props.login;

    return (
      <Route
        {...rest}
        component={(props) => (
          <div>
            <Header /> {/* HEADER ALWAYS VISIBLE */}
            <Component {...props} />
          </div>
        )}
      />
    );
  }
}

export default ProtectedRoute;
