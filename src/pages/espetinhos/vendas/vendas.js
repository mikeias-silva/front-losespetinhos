import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class InserirVenda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vendas: {
                vendas: "",
                id_valores: "1"
            },
            redirect: false
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/inicial" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend></legend>
                        <div>
                            <div>
                                <label htmlfor="vendas">Quantidade vendida</label>
                            </div>
                            <div>
                                <input
                                    autocomplete="off" type="text" id="vendas" name="vendas" placeholder="Quantidade vendida" minLength="1"
                                    value={this.state.vendas.vendas} onChange={this.handleImputChange}
                                />
                            </div>
                        </div>

                        <div>
                            {/*w  <div>
                                <label htmlfor="id_valores">id_valores</label>
                            </div>
                            <div>
                                <input disable
                                    type="text" id="id_valores" name="id_valores" placeholder="Valor da venda R$ 2.60"
                                    value="1" onChange={this.handleImputChange}
                                /> 
                            </div>*/}
                        </div>
                        <div>
                            <button type="submit">Confirmar</button>
                        </div>
                    </fieldset>

                </form>
            );
        }
    }

    handleImputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;


        this.setState(prevState => ({
            vendas: { ...prevState.vendas, [name]: value }
        }));
    }

    handleSubmit = event => {
        fetch("http://192.168.0.104:3003/sistema/inserirVendas", {
            method: "post",
            body: JSON.stringify(this.state.vendas),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true })
                }
            })

        event.preventDefault();
    }
}

export default InserirVenda;