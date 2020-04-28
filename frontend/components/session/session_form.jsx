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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    // demoLogin(e) {
    //     e.preventDefault();
    //     const demoUser = {
    //         email: "iamnotarealperson@hotmail.com",
    //         password: "password"
    //     };
    //     this.props.processform(demoUser)
    //         .then(() => this.props.history.push("/servers/@me"));
    // }

    renderErrors() {
        // console.log(this.props.errors);
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    usernameInput() {
        return(
            <label>USERNAME
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                />
            </label>
        )
    }

    welcomeMessage() {
        return(
            <div className='welcome-msg'>
                <h2>Welcome back!</h2>
                <h3>We're so excited to see you again!</h3>
            </div>
        )
    }

    render() {
        return (
            <div className="session-page">
                <div className="session-background">
                    <img className='session-bg-img' src={window.sessionbg} alt=''/>
                    <img src={window.logo} className='logo-img' alt="logo"/>
                </div>

                { (this.props.formType) === 'login' ?
                    this.welcomeMessage() : ""
                }

                <div className="session-form">
                    <form onSubmit={this.handleSubmit}>

                        {this.renderErrors()}

                        <label>EMAIL
                         <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        { 
                            (this.props.formType === 'signup') ?
                            this.usernameInput() : ""
                        }
                        <br />
                        <label>PASSWORD
                          <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="submit-form" type="submit" value={this.props.formType} />
                    </form>
                    <div className='session-footer'>
                        <span>Need an Account? <Link to='signup' className='register-link'>Register</Link></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;
