import React from 'react';

// Material UI Icons
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// Iconos
import AddIcon from './resources/icons/AddIcon';
import DriveFileIcon from './resources/icons/DriveFileIcon';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="Sidebar-list">
                    <button className="Sidebar-button"><AddIcon /><span>New</span></button>
                    <div className="Sidebar-item active">
                        <ArrowRightIcon className="Sidebar-arrow-icon" />
                        <DriveFileIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/my-drive">My drive</a>
                    </div>
                    <div className="Sidebar-item">
                        <PeopleAltOutlinedIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/shared-with-me">Shared with me</a>
                    </div>
                    <div className="Sidebar-item">
                        <QueryBuilderIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/recent">Recent</a>
                    </div>
                    <div className="Sidebar-item">
                        <StarBorderIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/starred">Starred</a>
                    </div>
                    <div className="Sidebar-item">
                        <DeleteIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/trash">Trash</a>
                    </div>
                    <div className="Sidebar-divider"></div>
                    <div className="Sidebar-item">
                        <CloudQueueIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/storage">Storage</a>
                    </div>
                    <div className="Sidebar-item progressbar">
                        <progress value="30" max="100"/>
                        <span>3.8 GB of 15 GB used</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;