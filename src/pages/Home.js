import React from 'react';

import SectionQuickAccess from './container/SectionQuickAccess';
import SectionFolders from './container/SectionFolders';
import SectionFiles from './container/SectionFiles';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <SectionQuickAccess/>
                <SectionFolders/>
                <SectionFiles/>
            </div>
        );
    }
}

export default Home;