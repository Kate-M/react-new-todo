import React from 'react';
import PropTypes from 'prop-types';
import Submit from '../Submit/Submit';
import Input from '../Input/Input';
import '../../styles/common-style.scss';
import './Form.scss';

const Form = ({ action, value, onTextChange, onSubmitTask }) => {
    const onValueChange = event => onTextChange(event);

    const onValueSubmit = event => onSubmitTask(event);

    return (
        <div className={`control-item ${action}-task`}>
            <form className={`form ${action}-form`} onSubmit={onValueSubmit}>
                <fieldset className="field-wrap">
                    <Input
                        optionalClass="control-item"
                        action={action}
                        onTextChange={onValueChange}
                        value={value}
                    />
                </fieldset>
                <Submit action={action} />
            </form>
        </div>
    );
};

Form.propTypes = {
    action: PropTypes.string,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
    onSubmitTask: PropTypes.func,
};

Form.defaultProps = {
    action: '',
    value: '',
    onTextChange: () => { },
    onSubmitTask: () => { },
};

export default Form;
