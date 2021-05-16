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
                    <button className="Sidebar-button"><AddIcon /><span>Nuevo</span></button>
                    <div className="Sidebar-item active">
                        <ArrowRightIcon className="Sidebar-arrow-icon"/>
                        <DriveFileIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/mi-unidad">Mi unidad</a>
                    </div>
                    <div className="Sidebar-item">
                        <PeopleAltOutlinedIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/compartido-conmigo">Compartido conmigo</a>
                    </div>
                    <div className="Sidebar-item">
                        <QueryBuilderIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/reciente">Reciente</a>
                    </div>
                    <div className="Sidebar-item">
                        <StarBorderIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/destacados">Destacados</a>
                    </div>
                    <div className="Sidebar-item">
                        <DeleteIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/papelera">Papelera</a>
                    </div>
                    <div className="Sidebar-divider"></div>
                    <div className="Sidebar-item">
                        <CloudQueueIcon className="Sidebar-icon" />
                        <a className="Sidebar-link" href="/almacenamiento">Almacenamiento</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;