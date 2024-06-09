import React, { Component } from "react";

class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }



    render() {
        return (
            <div>
                {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
            </div>
        );
    }
}

export default Horloge;