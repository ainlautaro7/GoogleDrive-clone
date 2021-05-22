import React from 'react';

// Material UI Icons
import FolderIcon from '@material-ui/icons/Folder';

class FolderCard extends React.Component {
    render() {
        return (
            <div className="FolderCard">
                <FolderIcon/>
                <h5 className="folder-name">Folder Name</h5>
            </div>
        )
    }
}

export default FolderCard;