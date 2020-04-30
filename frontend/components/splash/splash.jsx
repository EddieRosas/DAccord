
import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {

    const demoLogin = () => {
        // e.preventDefault()
        console.log("hi")
        const demoUser = {
            email: "iamnotarealperson@hotmail.com",
            password: "password"
        };

        props.demoLogin(demoUser)
            .then(() => props.history.push("/channels/@me"))
    }

    return (
        <div className="splash">
            <div className='splash-body'>
                <header className='splash-header'>
                    <div className='splash-logo'>
                        <img src={window.logo} className="splash-logo-img" alt="logo"/>
                    </div>
                    <div className="header-right">
                        <Link to='/login'><button className='login-button'>Login</button></Link>
                    </div>
                </header>

                <h1>A new way to chat with your communities and friends.</h1>
                <p>
                    D'Accord is the easiest way to communicate over voice, 
                    video, and text, whether you’re part of a school club, 
                    a nightly gaming group, a worldwide art community, 
                    or just a handful of friends that want to hang out.
                </p>

                <div className='splash-buttons'>
                    <Link to='/signup'> <button className="splash-button" >Sign Up</button></Link>
                    <button className='splash-button blue' onClick={() => demoLogin()}>Try the Demo</button>
                </div>

                <div className='somanyimgs-splash'>
                    <img className='android splash-img' src={window.android} alt="" />
                    <img className='bomb splash-img floating' src={window.bomb} alt="" />
                    <img className='disc splash-img' src={window.disc} alt="" />
                    <img className='circlefill-1 splash-img grey' src={window.circlefill} alt="" />
                    <img className='circlefill-2 splash-img grey' src={window.circlefill} alt="" />
                    <img className='circlefill-3 splash-img grey' src={window.circlefill} alt="" />
                    <img className='circlefill-4 splash-img grey' src={window.circlefill} alt="" />
                    <img className='circlefill-5 splash-img grey' src={window.circlefill} alt="" />
                    <img className='circleopen-1 splash-img grey' src={window.circle} alt="" />
                    <img className='circleopen-2 splash-img grey' src={window.circle} alt="" />
                    <img className='coin-1 splash-img floating' src={window.coin} alt="" />
                    <img className='coin-2 splash-img floating' src={window.coin} alt="" />
                    <img className='desktop splash-img' src={window.desktop} alt="" />
                    <img className='controller splash-img' src={window.controller} alt="" />
                    <img className='gamepak splash-img floating' src={window.gamepak} alt="" />
                    <img className='headphones splash-img' src={window.headphones} alt="" />
                    <img className='iphone splash-img' src={window.iphone} alt="" />
                    <img className='laptop splash-img' src={window.laptop} alt="" />
                    <img className='mariobox splash-img' src={window.mariobox} alt="" />
                    <img className='potion splash-img' src={window.potion} alt="" />
                    <img className='square-1 splash-img grey' src={window.square} alt="" />
                    <img className='square-2 splash-img grey' src={window.square} alt="" />
                    <img className='square-3 splash-img grey' src={window.square} alt="" />
                    <img className='triangle-1 splash-img grey' src={window.triangle} alt="" />
                    <img className='triangle-2 splash-img grey' src={window.triangle} alt="" />
                    <img className='triangle-3 splash-img grey' src={window.triangle} alt="" />
                    <img className='x-1 splash-img grey' src={window.x} alt="" />
                    <img className='x-2 splash-img grey' src={window.x} alt="" />
                    <img className='x-3 splash-img grey' src={window.x} alt="" />
                </div>

            </div>
        </div>
    )
}



export default Splash;