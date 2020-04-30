import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: ""
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

    labelErrors() {

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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

    renderErrors() {
        // console.log(this.props.errors);
        if (this.props.errors.length > 0) {
            return (
                <ul className="errors-list">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    usernameInput() {
        return(
            <>
                <h5>USERNAME</h5>
                <input 
                    tabindex="1" 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="session-input"
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
                    <Link to='/login' className="session-link">
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
                        <Link to='/signup' className="session-link">Register</Link>
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
                                <img src={window.logosvg} className='logo-img' alt="logo" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='session-form fadeIn'>

                    <form onSubmit={this.handleSubmit}>

                    <div className='form-header'>
                        {this.headerMessage()}
                    </div>
                    
                        {this.renderErrors()}

                        <h5>EMAIL</h5>
                        <input type="email"
                                tabindex="1"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="session-input"
                        />
                            { 
                                (this.props.formType === 'signup') ?
                                this.usernameInput() : ""
                            }
                        <h5>PASSWORD </h5>
                        <input type="password"
                                tabindex="1"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="session-input"
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
