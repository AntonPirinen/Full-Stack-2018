import React from 'react'
//import DeleteButton from './DeleteButton'

const Person = ({ person }) => {
    return (
        <div>
            <div> {person.name} {person.number}</div>   
         </div>
    )
}

export default Person