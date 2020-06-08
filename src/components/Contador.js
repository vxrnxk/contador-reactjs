import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super();

        this.state = {
            contador: 0
        }
    }

    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() { 
        return (
            <div>
                <h1>{ this.state.contador }</h1>

                <div>
                    <button onClick={ this.decrementar }>-</button>

                    <button onClick={ this.incrementar }>+</button>
                </div>
            </div>
        );
    }
}
 
export default Contador;
