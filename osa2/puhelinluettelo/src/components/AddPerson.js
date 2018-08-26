import React from 'react'

const AddPerson = ({ state, handleInput, handleSubmit} ) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                nimi: <input
                            name='newName'
                            value={state.newName} 
                            onChange={handleInput}/>
            </div>
            <div>
                numero: <input
                            name='newNumber'
                            value={state.newNumber} 
                            onChange={handleInput}/>
            </div>
            <div>
                <button type="submit" >lisää</button>
            </div>
        </form>
    )
}

export default AddPerson