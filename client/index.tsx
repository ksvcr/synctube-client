import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store'

import App from './src/App'

const root = document.getElementById('root')

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    root
)
