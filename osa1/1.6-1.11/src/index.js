import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>  
        </header>
    )
}

const Statistiikka = (props) => {
    //console.log(props.state.hyva)

    const positiivisia = () => {
        if (props.state.palautteita === 0) {
            return (
                0
            )
        }
        return (
            props.state.hyva / props.state.palautteita * 100
        )
    }
    
    const keskiarvo = () => {
        if (props.state.palautteita === 0) {
            return (
                0
            )
        }
        if (props.state.palautteita === 1) {
            return (
                1
            )
        }
        return (
            (props.state.hyva - props.state.huono) / props.state.palautteita
        )
    }

    return (
        <div>
            <h2>Statistiikka</h2>
            <p>Hyvä {props.state.hyva}</p>
            <p>Neutraali {props.state.neutraali}</p>
            <p>Huono {props.state.huono}</p>
            <p>Keskiarvo {keskiarvo()}</p>
            <p>Positiivisia {positiivisia()} %</p>
        </div>
    )
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

    lisaaHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            palautteita: this.state.palautteita + 1,
            summa: this.state.summa + 1,
        })
        //console.log(this.state.hyva)
    }

    lisaaNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            palautteita: this.state.palautteita + 1,
        })
    }

    lisaaHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            palautteita: this.state.palautteita + 1,
            summa: this.state.summa - 1,
        })
    }

    render() {
        return (
            <div>
                <Header title = 'Anna palautetta'/>
                <div className = 'buttons'>
                    <button onClick = {this.lisaaHyva}>Hyvä</button>
                    <button onClick = {this.lisaaNeutraali}>Neutraali</button>
                    <button onClick = {this.lisaaHuono}>Huono</button>
                </div>
                <div className = 'stats'>
                    <Statistiikka state = {this.state}/>
                </div>
            </div> 
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);

