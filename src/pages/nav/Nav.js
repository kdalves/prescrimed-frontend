import React from 'react'
import '../../styles/pages/nav/menu-nav.css'
import Sidebar from '../../components/sidebar/Sidebar';
import LogoImg from '../../images/prescrimedLogo2Grey.png';

function NavBar() {

    return (
        <div id="page-nav">
            <Sidebar />
            <div className="logo-content">
                <img src={LogoImg} alt="Logo prescrimed"></img>
            </div>

        </div>
    )
}
export default NavBar;