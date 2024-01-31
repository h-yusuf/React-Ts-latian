import React, { useState } from 'react'
import Button from '../../partials/button'

const Nav = ({ setValue,setColor }) => {
    return (
        <>
            <div className={`p-4 flex justify-between  bg-blue-200 sticky top-0 items-center ${setColor}`}>
                <p className='text-lg font-bold'> {!setValue ? "About" : setValue} </p>
                <Button
                    buttonText='login kawand'
                // button={changeNavbarValue()}
                />

            </div>

        </>
    )
}

export default Nav