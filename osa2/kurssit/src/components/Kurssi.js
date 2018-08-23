import React from 'react'

const Otsikko = ({ nimi }) => {
    return (
        <div>
            <h1>{nimi}</h1>
        </div>
    )
}

const Sisalto = ({ osat }) => {
    //console.log(props.osat[0]);
    return (
        <div>
            {osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
        </div>
    )
}

const Osa = ({ osa }) => {
    //console.log(props.osa);
    return (
        <p>{osa.nimi} {osa.tehtavia}</p>    
    )
}

const Yhteensa = ({ osat }) => {
    return (
        <div>
            <p>
                Yhteensä {osat.reduce((summa, osa) => summa + osa.tehtavia, 0)}
            </p>
        </div>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )   
}

export default Kurssi