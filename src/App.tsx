import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'
import { Footer } from './components/Footer'
import { Heading } from './components/Heading'
import { useState } from 'react'

export function App() {
    // (useState): Todos os componentes que usam 'número' saibam das mudanças em seu valor
    // Sempre que usar useState, não se deve usar atribuição diretamente

    // const [numero, setNumero] = useState(() => {
    //     console.log('Lazy initialization');
    //     return 0;
    // });

    const [numero, setNumero] = useState(0)

    function handleClick() {
        // setNumero((prevState) => prevState + 1);
        setNumero(numero + 1);
    }

    return (
        <>
            <Heading>Número: {numero}</Heading>
            <button onClick={handleClick}>Aumenta</button>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <DefaultInput labelText={numero.toString()} id='meuInput' type='text' placeholder='Digite algo' />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}