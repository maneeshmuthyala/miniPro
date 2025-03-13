import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect ,Link} from 'react-router-dom';
import './index.css';

class Loginpage extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeUsername = event => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
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
    const { email, password } = this.state;

    // Validate email and password formats
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

    // API call to backend login
    const url = 'http://localhost:8081/login';
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
        this.onSubmitFailure(data.message || 'Invalid email or password');
      }
    } catch (error) {
      this.onSubmitFailure('Server error. Please try again later.');
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { email } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          className="username-input-field"
          value={email}
          onChange={this.onChangeUsername}
          placeholder="Email"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token');

    if (jwtToken) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/deiezfpey/image/upload/v1741153829/f6d5e250-1575-42b2-9199-cbaeb7add7b2_j036ue.webp"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="bt-co">
          <button type="submit" className="login-button">
            SignIn
          </button>
          <Link to="/signup">
          <button type="button" className="login-button">
            SignUp
          </button>
          </Link>
          </div>
          
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default Loginpage;
