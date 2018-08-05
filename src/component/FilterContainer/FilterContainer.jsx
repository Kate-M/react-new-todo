import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem/FilterItem';
import { statusList as STATUS_LIST } from '../status';
import '../../styles/common-style.scss';
import './FilterContainer.scss';

class FilterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilterOpen: false,
            filterName: 'ALL',
        };
    }
    setFilter = (action, filter, event) => {
        this.setState({
            filterName: filter,
        });
        this.props.onSubmitFilter(action, event);
        this.openFilter();
    }
    openFilter = () => {
        this.setState({
            isFilterOpen: !this.state.isFilterOpen,
        });
    }

    render() {
        const { action } = this.props;
        const { isFilterOpen, filterName } = this.state;
        return (
            <div className={`control-item ${action}-task open-${isFilterOpen}`}>
                <a className={`${action}-btn`} onClick={this.openFilter}>
                    <span className="filter-active">{filterName.replace('_', ' ')}</span>
                </a>
                <ul className="filter-select">
                    {STATUS_LIST.map(e => (
                        <FilterItem key={e} filter={e} action={`filter-${e.toLowerCase()}`} onFilterInit={this.setFilter} />
                    )) }
                </ul>
            </div>
        );
    }
}

FilterContainer.propTypes = {
    action: PropTypes.string,
    onSubmitFilter: PropTypes.func,
};

FilterContainer.defaultProps = {
    action: '',
    onSubmitFilter: () => { },
};

export default FilterContainer;

