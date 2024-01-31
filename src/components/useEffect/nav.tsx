import React, { useState } from 'react'
import Button from '../../partials/button'


interface texs {
    text:string;
}
const Nav:React.FC<texs> = ({ text }) => {

    return (
        <>
            <div className={`p-4 flex justify-between  bg-blue-200 sticky top-0 items-center`}>
                <p className='text-lg font-bold'> {text} </p>
                <Button
                    buttonText='login kawand'
                // button={changeNavbarValue()}
                />

            </div>

        </>
    )
}

export default Nav