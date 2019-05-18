import React, { Component } from 'react';
import {
    Fabric
} from 'office-ui-fabric-react';
import './style.css'
import {
    CommunicationColors,
    SharedColors
} from '@uifabric/fluent-theme/lib/fluent/FluentColors';

import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Icon } from 'office-ui-fabric-react';
import { getFileTypeIconProps, FileIconType } from '@uifabric/file-type-icons';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';


class DefaultLayout extends Component {
    state = {}
    render() {
        return (
            <Fabric>
                <div style={{ color: CommunicationColors.primary }} >
                    Primary Color
                </div>
                <div style={{ color: SharedColors.magentaPink10 }} >
                    Magenta Pink 10
                </div>

                <div style={{ boxShadow: Depths.depth64 }} >
                    Depth 64
                </div>
                <i class="ms-Icon ms-Icon--AccessLogo" aria-hidden="true">
                    Icon Access
                </i>
                <div class="ms-BrandIcon--icon96 ms-BrandIcon--word" />
                <Icon {...getFileTypeIconProps({ extension: 'docx', size: 96, imageFileType: 'png' })} />
                <Icon {...getFileTypeIconProps({ type: FileIconType.folder, size: 96, imageFileType: 'svg' })} />
                <div class="ms-Grid" dir="ltr">
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2" style={{ boxShadow: Depths.depth64 }} >A</div>
                        <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10" style={{ boxShadow: Depths.depth64, color: SharedColors.magentaPink10 }} >B</div>
                    </div>
                </div>
                <div style={{ fontSize: FontSizes.size68 }}>Data Visualization and/or Large Numeric</div>
                <div style={{ fontSize: FontSizes.size42 }}>Full Screen Hero Moments</div>
                <div style={{ fontSize: FontSizes.size32 }}>Greeting Moments</div>
                <div style={{ fontSize: FontSizes.size28 }}>Page Titles</div>
                <div style={{ fontSize: FontSizes.size24 }}>Marketing Email Header</div>
                <div style={{ fontSize: FontSizes.size20 }}>Suite Nav</div>
                <div style={{ fontSize: FontSizes.size14 }}>Command & Control</div>
            </Fabric>
        );
    }
}

export default DefaultLayout;