import React from 'react';
// import PropTypes from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import navigation from './_nav'

const 

const SidebarMenu = ({ navigation, expanded, collapsed }) => (
    <div className='SidebarMenu'>
        <Nav
            groups={groups}
            expandedStateText={expanded}
            collapsedStateText={collapsed}
        />
    </div>
)

export default SidebarMenu;