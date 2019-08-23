import React from 'react'

const Person = ({ person, remove }) => {
    
    return (
        <div>
            <div>
                {person.name} {person.number}
                <button onClick={() => remove(person.id)}>delete</button>
            </div>   
         </div>
    )
}

export default Person