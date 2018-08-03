import React, { Component } from 'react';
import PropTypes from 'prop-types';
import status from '../statusOfTask';
import '../../styles/common-style.scss';
import './FilterContainer.scss';

class FilterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilterOpen: false,
        };
    }
    openFilter = () => {
        this.setState({
            isFilterOpen: !this.state.isFilterOpen,
        });
    }

    render() {
        const { action } = this.props;
        const { isFilterOpen } = this.state;
        return (
            <div className={`control-item ${action}-task open-${isFilterOpen}`}>
                <a className={`${action}-btn`} onClick={this.openFilter}>
                    <span className="filter-active">All</span>
                </a>
                <ul className="filter-select">
                    {/* {status.map(e => (
                        <li className="filter-item">
                            <a href="" className="filter-option filter-compl">{e}</a>
                        </li>
                    )) }; */}
                    <li className="filter-item">
                        <a href="" className="filter-option filter-all">All</a>
                    </li>
                    <li className="filter-item">
                        <a href="" className="filter-option filter-in">In progress</a>
                    </li>
                    <li className="filter-item">
                        <a href="" className="filter-option filter-compl">Complete</a>
                    </li>
                </ul>
            </div>
        );
    }
}

FilterContainer.propTypes = {
    action: PropTypes.string,
};

FilterContainer.defaultProps = {
    action: '',
};

export default FilterContainer;

