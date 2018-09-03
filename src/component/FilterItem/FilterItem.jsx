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
    /**
    * A prop that should not be visible in the documentation.
    *
    * @ignore
    */
    action: PropTypes.oneOf(['filter-default', 'filter-in_process', 'filter-complete', 'filter-all']),
    /**
    * A prop that should not be visible in the documentation.
    *
    * @ignore
    */
    filter: PropTypes.string.isRequired,
    /**
    * A prop that should not be visible in the documentation.
    *
    * @ignore
    */
    onFilterInit: PropTypes.func,
};

FilterItem.defaultProps = {
    action: '',
    filter: '',
    onFilterInit: () => { },
};

export default FilterItem;
