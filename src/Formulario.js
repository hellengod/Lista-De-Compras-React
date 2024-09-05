import React, { Component } from 'react';
class Produto extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            preco:"",
            quantidade:""
        }
        this.adicionar =this.adicionar.bind(this);
        this.atualiza =this.atualiza.bind(this);
        this.nome = React.createRef();
        this.preco = React.createRef();
        this.quantidade = React.createRef();
    }
    atualiza(){
        if(isNaN(this.preco.current.value)){
            alert("Valor invalido para o campo preco");
            this.preco.current.value="";
        }
        if(isNaN(this.quantidade.current.value) || this.quantidade.current.value.indexOf(".") >= 0){
            alert("Valor invalido para o campo Quantidade");
            this.quantidade.current.value="";
        }
        this.setState(
            {
                nome: this.nome.current.value,
                preco: parseFloat(this.preco.current.value),
                quantidade: parseFloat(this.quantidade.current.value)
            }
        );
    }
    adicionar(){
        if(this.props.evtAdicionar){
            this.props.evtAdicionar(this.state);
        }
        this.nome.current.value = "";
        this.preco.current.value = "";
        this.quantidade.current.value = "";
        this.setState({
            nome: "",
            preco: "",
            quantidade: "",
        });
    }
    render(){
        return(
            <div>
                Nome: <input ref= {this.nome} type="text" value= {this.props.nome} onChange= {this.atualiza}></input>
                Preco: <input ref= {this.preco} type="text" value= {this.props.preco} onChange= {this.atualiza}></input>
                Quantidade: <input ref= {this.quantidade} type="text" value= {this.props.quantidade} onChange= {this.atualiza}></input>
                <button onClick={this.adicionar}>Adicionar</button>

            </div>
        )
    }
}
export default Produto;