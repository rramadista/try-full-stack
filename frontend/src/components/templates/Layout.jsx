import React from 'react';
import { Fabric } from 'office-ui-fabric-react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Body from '../organisms/Body';
import SidebarMenu from '../organisms/SidebarMenu';

export default props => (
    <Fabric>
        <Header />
        <Body />
        <SidebarMenu />
        <Footer />
    </Fabric>
);
