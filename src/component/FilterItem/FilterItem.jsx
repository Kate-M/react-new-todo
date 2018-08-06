import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';

const FilterItem = ({ filter, action, onFilterInit }) => {
    const handleFilter = (event) => {
        onFilterInit(action, filter, event);
    };

    return (
        <li className="filter-item">
            <a href="" className="filter-option filter-compl" onClick={handleFilter}>{filter.replace('_', ' ')}</a>
        </li>
    );
};

FilterItem.propTypes = {
    action: PropTypes.oneOf(['filter-default', 'filter-in_process', 'filter-complete', 'filter-all']),
    filter: PropTypes.string.isRequired,
    onFilterInit: PropTypes.func,
};

FilterItem.defaultProps = {
    action: '',
    filter: '',
    onFilterInit: () => { },
};

export default FilterItem;
