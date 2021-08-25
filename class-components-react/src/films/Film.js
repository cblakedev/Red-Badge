//write a class component here to display each film within the map method
import React, { Component } from 'react';

class Film extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <p>
                {this.props.filmTitle}
            </p>
        )
    }
}

export default Film