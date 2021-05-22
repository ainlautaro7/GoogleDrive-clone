import React from 'react';

import FileCard from '../../components/cards/FileCard';

class SectionFiles extends React.Component {
    render() {
        return (
            <section className="container">
                <h5>Files</h5>
                <div className="SectionFiles">
                    <FileCard />
                    <FileCard />
                    <FileCard />
                    <FileCard />
                </div>
                <div className="SectionFiles">
                    <FileCard />
                    <FileCard />
                    <FileCard />
                    <FileCard />
                </div>
                <div className="SectionFiles">
                    <FileCard />
                    <FileCard />
                    <FileCard />
                    <FileCard />
                </div>
            </section>
        );
    }
}

export default SectionFiles;