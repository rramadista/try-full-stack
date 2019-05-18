import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

const SidebarMenu = ({ groups, expanded, collapsed }) => (
    <div className='SidebarMenu'>
        <Nav
            groups={groups}
            expandedStateText={expanded}
            collapsedStateText={collapsed}
        />
    </div>
)

SidebarMenu.props = {
    expanded: PropTypes.string,
    collapsed: PropTypes.string,
}

SidebarMenu.defaultProps = {
    groups: [{
        name: 'Basic components',
        links: [
            {
                key: 'ActivityItem',
                name: 'ActivityItem',
                url: '#/examples/activityitem'
            },
            {
                key: 'Breadcrumb',
                name: 'Breadcrumb',
                url: '#/examples/breadcrumb'
            },
            {
                key: 'Button',
                name: 'Button',
                url: '#/examples/button'
            }
        ]
    },
    {
        name: 'Extended components',
        links: [
            {
                key: 'ColorPicker',
                name: 'ColorPicker',
                url: '#/examples/colorpicker'
            },
            {
                key: 'ExtendedPeoplePicker',
                name: 'ExtendedPeoplePicker',
                url: '#examples/extendedpeoplepicker'
            },
            {
                key: 'GroupedList',
                name: 'GroupedList',
                url: '#examples/groupedlist'
            }
        ]
    },
    {
        name: 'Utilities',
        links: [
            {
                key: 'FocusTrapZone',
                name: 'FocusTrapZone',
                url: '#examples/focustrapzone'
            },
            {
                key: 'FocusZone',
                name: 'FocusZone',
                url: '#examples/focuszone'
            },
            {
                key: 'MarqueeSelection',
                name: 'MarqueeSelection',
                url: '#examples/marqueeselection'
            }
        ]
    }],
    expanded: 'expanded',
    collapsed: 'collapsed',
}

export default SidebarMenu;