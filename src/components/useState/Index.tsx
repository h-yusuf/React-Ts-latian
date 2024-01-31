import React, { useState } from 'react';
import Button from '../../partials/button';
import Form from '../../partials/Form';
import Nav from './nav';

const Index: React.FC = (): JSX.Element => {

    // UseState

    const [beforeClick, afterclick] = useState("")
    const [beforeColor, afterColor] = useState("")
    const [beforechange, afterchange] = useState("")
    const [count, setCount] = useState(0);
    const increment = () => {

        // Memperbarui state count

        setCount(count + 1);
    }
    const changeNavbarValue = () => {
        afterclick("My App")
    }
    const changebgcolor = () => {
        afterchange("bg-indigo-950 text-white")
    }
    const ChangeColor = () => {
        afterColor('bg-black text-white')
    }

    const nm = 12;
    var nam = `nomer ini adalah ${nm}`
    return (
        <>
            <Nav
                setValue={beforeClick}
                setColor={beforeColor}
            />
            <div className={`w-full h-screen flex items-center justify-center bg-indigo-100 ${beforechange}`}>
                <div className="grid gap-4 justify-center">
                    <h1 className="text-5xl mb-10 font-bold text-center">
                        {count}
                    </h1>
                    <div className="flex justify-between ">

                        <Button
                            buttonText="Ubah color"
                            onClick={() => ChangeColor()}
                        />
                        <Button
                            change={beforeClick}
                            buttonText="Ubah Navbar"
                            onClick={() => changeNavbarValue()}
                        />
                        <Button
                            change={beforeClick}
                            buttonText="Ubah value"
                            onClick={() => increment()}
                        />
                        <Button
                            change={beforeClick}
                            buttonText="Ubah bg color"
                            onClick={() => changebgcolor()}
                        />
                    </div>
                    <Form

                    />
                </div>
            </div>
        </>
    );

}


export default Index;
