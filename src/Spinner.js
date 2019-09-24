import React from 'react';

const Spinner = props => {
    console.log(props)
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

// Default Property
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;