import React from 'react';

import LoadImage from '../../images/load-image.jpg';

// Material UI Icons
import ImageIcon from '@material-ui/icons/Image';

class FileCard extends React.Component{
    render(){
        return(
            <div className="FileCard">
                <div className="FileCard-preview">
                    <img src={LoadImage} width="100%" alt="pic"/>
                </div>
                <div className="FileCard-body">
                    <ImageIcon className="icon"/>
                    <h5 className="file-name">file name</h5>
                </div>
            </div>
        );
    }
}

export default FileCard;