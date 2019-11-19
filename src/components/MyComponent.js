import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        value : 0
    }

    static getDerivedStateFromProps(nextP,prevS) {
        if(prevS.value !== nextP.value)  {
            return {
                value : nextP.value 
            }
        }
        return null;
    }

    shouldComponentUpdate(nextP,nextS) {
        if(nextP.value == 10) return false;
        return true;
    }

    componentDidUpdate(prevP,prevS) {
        if(this.props.value !==prevP.value) {
            console.log('value 값이 바뀌었다 !', this.props.value);
        }
    }

    componentWillUnmount() {
        console.log('Good Bye !')
    }

    render() {
        return (
            <div>
                {this.props.missing.item}
                <p>props : {this.props.value}</p>
                <p>state : {this.state.value}</p>
            </div>
        )
    }
}

export default MyComponent;