import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    //console.log(props.osat[0]);
    return (
        <div>
            <Osa osa = {props.osat[0]}/>
            <Osa osa = {props.osat[1]}/>
            <Osa osa = {props.osat[2]}/>
        </div>
    )
}

const Osa = (props) => {
    //console.log(props.osa);
    return (
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>    
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Fundamentals of React',
            tehtavia: 10
          },
          {
            nimi: 'Using props to pass data',
            tehtavia: 7
          },
          {
            nimi: 'State of a component',
            tehtavia: 14
          }
        ]
      }
  
    return (
      <div>
        <Otsikko kurssi = {kurssi} />
        <Sisalto osat = {kurssi.osat}/>
        <Yhteensa osat = {kurssi.osat} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)