import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect,Link } from 'react-router-dom';
import './index.css';

class SignUpPage extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onChangeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePassword = password => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    this.setState({ showSubmitError: false, errorMsg: '' });
    this.props.history.replace('/'); // Redirect to homepage
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async event => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;

    if (!this.validateEmail(email)) {
      this.onSubmitFailure('Invalid email format');
      return;
    }

    if (!this.validatePassword(password)) {
      this.onSubmitFailure(
        'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      this.onSubmitFailure('Passwords do not match');
      return;
    }

    // API call to backend signup
    const url = 'http://localhost:8081/signup'; // Corrected URL for signup
    const userDetails = { email, password };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token);
      } else {
        this.onSubmitFailure(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      this.onSubmitFailure('Server error. Please try again later.');
    }
  };

  renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        EMAIL
      </label>
      <input
        type="text"
        id="email"
        className="input-field"
        value={this.state.email}
        onChange={this.onChangeEmail}
        placeholder="Email"
      />
    </>
  );

  renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="input-field"
        value={this.state.password}
        onChange={this.onChangePassword}
        placeholder="Password"
      />
    </>
  );

  renderConfirmPasswordField = () => (
    <>
      <label className="input-label" htmlFor="confirmPassword">
        CONFIRM PASSWORD
      </label>
      <input
        type="password"
        id="confirmPassword"
        className="input-field"
        value={this.state.confirmPassword}
        onChange={this.onChangeConfirmPassword}
        placeholder="Confirm Password"
      />
    </>
  );

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token');

    if (jwtToken) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signup-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h2>Sign Up</h2>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderConfirmPasswordField()}</div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <p>Already have an Account <Link to="/login">Sign In</Link></p>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default SignUpPage;
