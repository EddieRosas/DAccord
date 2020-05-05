import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: "",
            emailErrors: false,
            passwordErrors: false,
            usernameErrors: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
        this.setState({
            email: "",
            username: "",
            password: ""
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    errorStateCleanse() {
        this.state.emailErrors = false;
        this.state.usernameErrors = false;
        this.state.passwordErrors = false;
    }

    passwordLabel() {
        if (this.props.errors.length > 0) {
            if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
                this.state.passwordErrors = true;
                return (
                    <div className="error-label-container">
                        <h5>PASSWORD</h5>
                        <h5 className="error-label">
                            &nbsp;- Password too short. Must be a minimum of 6 characters!
                        </h5>
                    </div>
                )
            } else if (this.props.errors.includes("Invalid credentials")) {
                this.state.passwordErrors = true;
                return (
                    <div className="error-label-container">
                        <h5>PASSWORD</h5>
                        <h5 className="error-label">
                            &nbsp;- Invalid Email or Password
                        </h5>
                    </div>
                )
            } else {
                return (
                    <h5>PASSWORD</h5>
                )
            }
        } else {
            return (
                <h5>PASSWORD</h5>
            )
        }
    }

    emailLabel() {
        if (this.props.errors.length > 0) {
            if (this.props.errors.includes("Invalid credentials")) {
                this.state.emailErrors = true;
                return (
                    <div className="error-label-container">
                        <h5>EMAIL</h5>
                        <h5 className="error-label">
                            &nbsp;- Invalid Email or Password
                        </h5>
                    </div>
                )
            } else if (this.props.errors.includes("Email can't be blank")) {
                this.state.emailErrors = true;
                return (
                    <div className="error-label-container">
                        <h5>EMAIL</h5>
                        <h5 className="error-label">
                            &nbsp;- Email can't be blank!
                        </h5>
                    </div>
                )
            } else if (this.props.errors.includes("Email has already been taken")) {
                this.state.emailErrors = true;
                return(
                    <div className="error-label-container">
                        <h5>EMAIL</h5>
                        <h5 className="error-label">
                            &nbsp;- Email has already been taken!
                        </h5>
                    </div>
                )
            } else {
                return (
                    <h5>EMAIL</h5>
                )
            }
        } else {
            return (
                <h5>EMAIL</h5>
            )
        }
    }

    usernameLabel() {
        if (this.props.errors.length > 0) {
            if (this.props.errors.includes("Username can't be blank")) {
                this.state.usernameErrors = true;
                return (
                    <div className="error-label-container">
                        <h5>USERNAME</h5>
                        <h5 className="error-label">
                            &nbsp;- Username can't be blank!
                        </h5>
                    </div>
                )
            } else if (this.props.errors.includes("Username has already been taken")) {
                this.state.usernameErrors = true;
                return (
                    <div className="error-label-container">
                        <h5>USERNAME</h5>
                        <h5 className="error-label">
                            &nbsp;- Username has already been taken!
                        </h5>
                    </div>
                )
            } else {
                return (
                    <h5>USERNAME</h5>
                )
            }
        } else {
            return (
                <h5>USERNAME</h5>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.errorStateCleanse();
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {
            email: "iamnotarealperson@hotmail.com",
            password: "password"
        };

        this.props.demoLogin(demoUser)
            .then(() => this.props.history.push("/channels/@me"));
    }

    // renderErrors() {
    //     if (this.props.errors.length > 0) {
    //         return (
    //             <ul className="errors-list">
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={`error-${i}`}>
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     }
    // }

    usernameInput() {
        return(
            <>
                {(this.usernameLabel())}
                <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className=
                        {(this.state.usernameErrors === false) ? "session-input" : "session-input error-input"}
                />
            </>
        )
    }

    
    headerMessage() {
        if (this.props.formType === 'login') {
            return (
                    <div className='form-header-login'>
                        <h2>Welcome back!</h2>
                        <h3>We're so excited to see you again!</h3>
                    </div>
            )
        } else {
            return(
                    <div className='form-header-signup'>
                        <h2>Create an account</h2>
                    </div>
            )
        }
    }

    footerLink() {
        if (this.props.formType === 'signup') {
            return (
                <div className="form-footer signup">
                    <Link to='/login' className="session-link" onClick={this.errorStateCleanse()}>
                        Already have an account?
                    </Link>
                    <Link to="/channels/@me" className="session-demo-link" onClick={this.demoLogin}>
                        Use Demo Account!
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="form-footer login">
                    <p>
                        Need an account?
                        &nbsp;
                        <Link to='/signup' className="session-link" onClick={this.errorStateCleanse()}>Register</Link>
                    </p>
                    <p>
                        <Link to="/channels/@me" className="session-demo-link" onClick={this.demoLogin}>
                            Use Demo Account!
                        </Link>
                    </p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className='session-background'>
                    <img className='session-bg-img' src={window.sessionbg} alt="" />
                    <div>
                        <Link to='/'>
                            <div className='session-logo'>
                                <img src={window.logo} className='session-logo-img' alt="logo" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='session-form fadeIn'>

                    <form onSubmit={this.handleSubmit}>

                        <div className='form-header'>
                            {this.headerMessage()}
                        </div>

                        {this.emailLabel()}
                        <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className=
                                    {(this.state.emailErrors === false) ? "session-input" : "session-input error-input"}
                        />
                        { 
                            (this.props.formType === 'signup') ?
                            this.usernameInput() : ""
                        }
                        {this.passwordLabel()}
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className=
                                    { (this.state.passwordErrors === false) ? "session-input" : "session-input error-input" }
                            />
                        <button type="submit" className="form-button blue">
                            {
                                (this.props.formType === 'login') ?
                                    "Login" : "Continue"
                            }
                        </button>
                    </form>
                        
                        {this.footerLink()}
                        
                </div>
            </div>
        )
    }
}

export default SessionForm;
