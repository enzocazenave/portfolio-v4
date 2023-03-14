import { createRoot } from 'react-dom/client'
import { Sidebar } from './components'
import { Portfolio } from './Portfolio'

import './styles/index.css'

import {
    container
} from './styles/modules/Main.module.css'

createRoot(document.getElementById('root')).render(
    <main className={ container }>
        <Sidebar />
        <Portfolio />
    </main>
)