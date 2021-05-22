import React from 'react';

import LoadImage from '../../images/load-image.jpg';

class DocumentCard extends React.Component{
    render(){
        return(
            <div className="DocumentCard">
                <div className="DocumentCard-preview">
                    <img src={LoadImage} width="100%" alt="pic"/>
                </div>
                <div className="DocumentCard-body">
                    <span className="document-name">document name.ext</span>
                    <span className="date-action">You opened yasterday</span>
                </div>
            </div>
        );
    }
}

export default DocumentCard;