import React from 'react'

const TestEventos = () => {
    
    
    function handleOnKeyDown(e){
        console.log(e)
    }
    
    return (
        <>
        <input onKeyDown={handleOnKeyDown}/>
        </>
    )
}

export default TestEventos