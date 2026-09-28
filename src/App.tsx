import { Heading } from './components/Heading';

import './styles/global.css'
import './styles/theme.css'
import { TimerIcon } from 'lucide-react'

export function App() {
    return (
        <>
            <Heading>
                Olá, Mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo porro quod error reprehenderit consequatur adipisci eaque dolores sed, recusandae nisi, numquam, vel voluptatum laboriosam! Minus eligendi maiores impedit doloremque.
            </p>
        </>
    );
}