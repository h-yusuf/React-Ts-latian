import React from 'react'
import Button from './button'

const Form = () => {
    return (
        <>
            <form className=" flex flex-col gap-4 text-black">
                <select className='rounded-lg p-2 pe-2'>
                    <option value="12000">12000</option>
                    <option value="12000">12000</option>
                    <option value="12000">11000</option>
                    <option value="12000">13000</option>
                </select>
                <Button
                    buttonText='Submit'
                />
            </form>

        </>
    )
}

export default Form