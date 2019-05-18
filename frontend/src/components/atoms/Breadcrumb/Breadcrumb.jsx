import React from 'react';
// import PropTypes from 'prop-types';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';

const AppBreadcrumb = props => (
    <div style={{ display: 'inline-block' }}>
        <Breadcrumb
            items={[
                { text: 'Files', key: 'Files' },
                { text: 'This is folder 1', key: 'f1' },
                { text: 'This is folder 2 with a long name', key: 'f2' },
                { text: 'This is folder 3 long', key: 'f3' },
                { text: 'This is folder 4', key: 'f4' },
                { text: 'This is folder 5 another', key: 'f5', isCurrentItem: true }
            ]}
            ariaLabel={'Breadcrumb with no maxDisplayedItems'}
        />
    </div>
)

export default AppBreadcrumb;