import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                console.log(err)
                this.setState({ errMessage: err.message })
            }
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}<br></br>
                Error: {this.state.errMessage}
            </div>
        )
    }
}




ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
