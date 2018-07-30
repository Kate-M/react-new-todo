import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Header.scss';

const Header = props => (
    <header>
        <div className="container">
            <div className="title">
                <a href={props.link}>
                    <h1>{props.title}</h1>
                </a>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

Header.defaultProps = {
    title: '',
    link: '',
};

export default Header;
