import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Submit from '../Submit/Submit';
import Input from '../Input/Input';
import '../../styles/common-style.scss';
import './Form.scss';

// const Form = ({ action, handleChange }) => (
//     <form className={`form ${action}-form`}>
//         <fieldset className="field-wrap">
//             <Input action={action} onChange={handleChange} />
//         </fieldset>
//         <Submit action={action} />
//     </form>
//   );

// Form.propTypes = {
//     action: PropTypes.string,
//     handleChange: PropTypes.func,
// };

// Form.defaultProps = {
//     action: '',
//     handleChange: () => {},
// };
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Todo',
            tasks: [],
        };
        this.updateData = this.updateData.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    updateData(event) {
        this.setState({ value: event });
    }
    submitData() {
        const task = this.state.value;
        this.state.tasks.push(task);
        const taskData = JSON.stringify(this.state.tasks);
        localStorage.setItem('todo', taskData);
        console.log(JSON.parse(localStorage.getItem('todo')));
    }
    render() {
        const { action } = this.props;
        this.state.tasks = JSON.parse(localStorage.getItem('todo')) || [];
        return (
            <div>
                <form className={`form ${action}-form`} onSubmit={this.submitData}>
                    <fieldset className="field-wrap">
                        <Input action={action} updateData={this.updateData} />
                    </fieldset>
                    <Submit action={action} />
                </form>
                <p>{this.state.tasks}</p>
            </div>
        );
    }
}

Form.propTypes = {
    action: PropTypes.string,
};

Form.defaultProps = {
    action: '',
};
export default Form;
