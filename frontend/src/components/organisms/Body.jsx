import React from 'react';
import { Fabric } from 'office-ui-fabric-react';

export default props => (
    <Fabric>
        {props.children}
        Hello World! This is body.
    </Fabric>
);