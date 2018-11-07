import React, {Component} from 'react';

class Square extends Component {
    render() {
        return (
            <button className="Square">{this.props.value}</button>
        );
    }
}

export default Square;
