import React, { Component } from "react";

class Equipe extends Component{
  render(props){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <Social fb={this.props.facebook}/>
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
    </div>
    );
  }
}

const Social = (props) => {
  return(
    <div>
      <a href={props.fb}>Facebook </a>
      <a href={props.linkedin}>Lindekin </a>
    </div>
  )

}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe 
      nome="Wesley"
      cargo="Programador"
      idade="26"/>  
      <Equipe 
      nome="Lucas"
      cargo="Desing"
      idade="25"
      facebook="https:google.com"/>    
    </div>
  );
};

export default App;