import React from 'react';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="home-page-box">
                <div id="home-page-content">
                    <h1 id="home-page-header">Hello, and welcome to D'Accord!</h1>
                    <p id="home-page-paragraph">To check out a server, click on one of the circles on the bar on the left. You can also create or join a server by clicking on the <span style={{ color: '#43B581' }}>green</span> plus sign.  </p>
                </div>
            </div>
        )
    }
}

export default HomePage;

// You can add or change your user icon by clicking on the circle next to your name on the bottom left. Have fun!