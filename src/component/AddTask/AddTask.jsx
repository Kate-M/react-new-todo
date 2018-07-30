import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import '../../styles/common-style.scss';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Todo',
        };
    }

    render() {
        const { action } = this.props;
        return (
            <div className={`control-item ${action}-task`}>
                <Form action={action} />
            </div>
        );
    }
}
AddTask.propTypes = {
    action: PropTypes.string,
};

AddTask.defaultProps = {
    action: '',
};

export default AddTask;
