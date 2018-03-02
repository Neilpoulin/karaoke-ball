import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Division.css';

class Division extends Component {
    static propTypes = {
        value: PropTypes.string,
        widthPercent: PropTypes.number,
        type: PropTypes.oneOf(['lyric', 'chord']).isRequired,
        active: PropTypes.bool.isRequired
    }

    static defaultProps = {
        widthPercent: 100,
        value: "",
        active: false,
    }

    render() {
        const {
            value,
            widthPercent,
            type,
            active
        } = this.props;
        return <div style={{width: `${widthPercent}%`}}
                    className={`division ${type} ${active ? 'active' : ''}`}>
                {value}
            </div>
    }
}

export default Division;