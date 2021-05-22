import React from 'react';

// Images
import LogoNavbar from '../images/logo.png';
import ProfileIconImage from '../images/profile-icon.jpg';

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

// Icons
import ProfileIcon from './resources/icons/ProfileIcon';
import SettingsIcon from './resources/icons/SettingsIcon';
import AppsIcon from './resources/icons/AppsIcon';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar-brand">
                    <img src={LogoNavbar} alt="logo navbar" />
                    <span>Drive</span>
                </div>
                <form className="Navbar-form">
                    <button type="submit" className="btn-search"><SearchIcon /></button>
                    <input placeholder="  Search in Drive" />
                    <button type="submit" className="btn-arrow"><ArrowDropDownIcon /></button>
                </form>

                <div className="Navbar-item"><HelpOutlineIcon /></div>
                <div className="Navbar-item settings-icon"><SettingsIcon /></div>
                <div className="Navbar-item apps-icon"><AppsIcon /></div>
                <div className="Navbar-item profile-icon"><ProfileIcon src={ProfileIconImage}/></div>
            </nav>
        );
    }
}

export default Navbar;