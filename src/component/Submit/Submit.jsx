import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/common-style.scss';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Add',
        };
    }
    render() {
        const { action } = this.props;
        return (
            <button className={`btn btn-md ${action}-btn`} type="submit" />
        );
    }
}

Submit.propTypes = {
    action: PropTypes.string,
};

Submit.defaultProps = {
    action: '',
};

export default Submit;
