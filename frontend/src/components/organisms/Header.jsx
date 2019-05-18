import React from 'react';
import { PivotItem, Pivot, Label } from 'office-ui-fabric-react';


const Header = () => (
    <header>
        <Pivot>
            <PivotItem headerText="My Files">
                <Label>My Files</Label>
            </PivotItem>
            <PivotItem headerText="Recent">
                <Label>Recent</Label>
            </PivotItem>
            <PivotItem headerText="Shared with me">
                <Label>Shared with me</Label>
            </PivotItem>
        </Pivot>
    </header>
)

export default Header;