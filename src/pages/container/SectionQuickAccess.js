import React from 'react';

import DocumentCard from '../../components/cards/DocumentCard';

class SectionQuickAcces extends React.Component {
    render() {
        return (
            <section>
                <h5>Quick Access</h5>
                <div className="SectionQuickAcces">
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                </div>
            </section>
        );
    }
}

export default SectionQuickAcces;