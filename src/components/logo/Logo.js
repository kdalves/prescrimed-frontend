import React, { Component } from 'react';
import '../logo/Logo.css'
import LogoImg from '../../images/prescrimedLogo2.png'

export default class Logo extends Component {
    render() {
        return (
            <img className="logoImg" src={LogoImg} alt="Logo Prescrimed"></img>
        )
    }
}
