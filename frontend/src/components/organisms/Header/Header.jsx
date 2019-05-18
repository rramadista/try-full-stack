import React from 'react';
import PropTypes from 'prop-types';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import './style.css'

const Header = ({ onChange, onSearch }) => (
    <div className="NavBar">
        <div className="logo ms-font-xl">
            <strong>Awesome App</strong>
        </div>
        <div className="searchbox">
            <SearchBox 
                labelText="Cari"
                onChange={(newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
            />
        </div>
    </div>
)

Header.propTypes = {
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
}

Header.defaultProps = {
    onChange: (newValue) => console.log('SearchBox onChange fired: ' + newValue),
    onSearch: (newValue) => console.log('SearchBox onSearch fired: ' + newValue),
}

export default Header;