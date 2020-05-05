import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const Teste = () => {
    return (<div>
        TESTE Teste
        <div>OUTRO TESE OUTRA DIV</div>
    </div>
    )
}

const Comercial = props => {

    const dados_mdk = props.dados_mdk.map((dados_mdk, index) => {

        if (dados_mdk.fase == '2 - Comercial') {
            return (
                <TableRow>

                    <TableCell component="th" scope="row">
                        <Typography variant="headlide" color="inherit" align="centered" centered>
                            MDK2023 - Gestão real a vista - Manutenção

                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="headlide" color="inherit">
                            Via Lácteos
                        </Typography>
                    </TableCell>
                    <TableCell>

                        <Typography variant="headlide" color="inherit">30/04</Typography>

                    </TableCell>

                    <TableCell style={{ backgroundColor: "#388e3c", textAlign: "center", color: "#FFFFFF" }}>
                        0%
                                    </TableCell>
                </TableRow>


            );
        }
    });

    return (<TableBody>
        {dados_mdk}
    </TableBody>
    );
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#5a6d8a",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: "16px",
        fontFamily: 'Roboto',
    },
}))(TableCell);

const Producao = props => {

    const dados_mdk = props.dados_mdk.map((dados_mdk, index) => {

        if (dados_mdk.fase == '4.2 - Producao - Em Execucao') {
            return (
                <TableRow>

                    <TableCell component="th" scope="row">
                        <Typography variant="headlide" color="inherit" align="centered" centered>
                            teste

                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="headlide" color="inherit">
                            Cliente
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Link to={`/mdks/${dados_mdk.id}`}>
                            <Typography variant="headlide" color="inherit">Data</Typography>
                        </Link>
                    </TableCell>
                    <TableCell>
                        Obs
                                    </TableCell>

                </TableRow>


            );
        }
    });

    return (<TableBody>
        {dados_mdk}
    </TableBody>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#ff0000',
    },
}));


const Vendas = props => {
    const vendas = props.vendas.map((vendas, index) => {

        return (
            <div>
                {console.log(vendas, "vendas")}
            </div>
        );
    });
}

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendas: []
        }
    }
    componentDidMount() {
        fetch('http://192.168.0.104:3003/sistema/vendas', { mode: 'cors' })
            .then(vendas =>
                vendas.json().then(vendas => this.setState({ vendas }))
            )


    }


    render() {


        const { vendas } = this.state;

        return (

            <div>
                <div>
                    incluído com sucesso
</div>
                <div>
                    <a href="/inserirVenda">inserir nova venda</a>
                </div>
            </div>
        )

    }


}

