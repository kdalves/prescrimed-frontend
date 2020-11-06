import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../login/Login.css';


export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            cpf_valor:"",
            senha_valor:"",
        }
        this.salvarDados = this.salvarDados.bind(this);
    }
    salvarDados(){
        console.log(this.state)
    }
    render() {
        return (
       <div className="login">
           <div className="login-content">
               <fieldset>
               <h6>{this.props.cpf}:</h6>
                    <input type="text" className="form-control" id="inputCpf"  placeholder="Insira seu cpf" 
                                onChange={ (event) => {this.setState({cpf_valor:event.target.value})} }></input>
                    <h6>{this.props.senha}:</h6>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Insira sua senha"></input>
                    <input type="button" id="buttonLogin" className="btn btn-primary btn-block" value="Login" onClick={this.salvarDados}></input>
                    <Link to="/esqueciMinhaSenha">Esqueci minha senha</Link>
                    <h2>{this.state.cpf_valor}</h2>     
                </fieldset>          
           </div>
       </div>
        )
    }
}
