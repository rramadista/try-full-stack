import React from 'react';
import PropTypes from 'prop-types';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';

const PageTitle = props => (
    <div style={{ fontSize: FontSizes.size28 }}>{props.text}</div>
)

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PageTitle;