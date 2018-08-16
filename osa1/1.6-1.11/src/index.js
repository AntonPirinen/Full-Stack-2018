import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ header }) => {
    return (
        <header>
            <h1>{header}</h1>  
        </header>
    )
}

const Statistics = (props) => {
    if(props.state.palautteita === 0) {
        return (
        <div>
            <h2>Statistiikka</h2>
            <p>ei yhtään palautetta annettu</p>
        </div>
        )
    }

    return (
        <div>
            <h2>Statistiikka</h2>
            <table>
                <tbody>
                    <Statistic state = {props.state} operation = 'hyva' arvo = {props.state.hyva}/>
                    <Statistic state = {props.state} operation = 'neutraali' arvo = {props.state.neutraali}/>
                    <Statistic state = {props.state} operation = 'huono' arvo = {props.state.huono}/>
                    <Statistic state = {props.state} operation = 'positiivisia' arvo = {0} yksikko = ' %'/>
                    <Statistic state = {props.state} operation = 'keskiarvo' arvo = {0}/>
                </tbody>
            </table>
        </div>
    )
}   

const Statistic = (props) => {
    let value = props.arvo

    if (props.operation === 'positiivisia') {
        value = props.state.hyva / props.state.palautteita * 100 + props.yksikko
    }

    if (props.operation === 'keskiarvo') {
        if (props.state.palautteita === 1) {
            value = 1
        }
        value = (props.state.hyva - props.state.huono) / props.state.palautteita
    }

    return (
        <tr>
        <td>{props.operation}</td>
        <td>{value}</td>
        </tr>
    )
}

const Button = (props) => {
    return <button onClick = {props.handler}>{props.label}</button>
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            palautteita: 0,
        }
    }

    lisaa = (type) => {
        return () => {
            this.setState({
                [type]: this.state[type] + 1,
                palautteita: this.state.palautteita +1
            })
        }
    }

    render() {
        return (
            <div>
                <Header header = 'Anna palautetta'/>
                <div className = 'buttons'>
                    <Button handler = {this.lisaa('hyva')} label = 'Hyvä'/>
                    <Button handler = {this.lisaa('neutraali')} label = 'Neutraali'/>
                    <Button handler = {this.lisaa('huono')} label = 'Huono'/>
                </div>
                <Statistics state = {this.state}/>
            </div> 
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);

