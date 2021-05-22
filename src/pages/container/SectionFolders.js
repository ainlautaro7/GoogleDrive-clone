import React from 'react';

import FolderCard from '../../components/cards/FolderCard';

class SectionFolders extends React.Component {
    render() {
        return (
            <section className="container">
                <h5>Folders</h5>
                <div className="SectionFolders">
                    <FolderCard />
                    <FolderCard />
                    <FolderCard />
                    <FolderCard />
                </div>
                <div className="SectionFolders">
                    <FolderCard />
                    <FolderCard />
                    <FolderCard />
                    <FolderCard />
                </div>
                <div className="SectionFolders">
                    <FolderCard />
                    <FolderCard />
                    <FolderCard />
                </div>
            </section>
        );
    }
}

export default SectionFolders;