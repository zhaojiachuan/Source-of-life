import React from 'react'
import { render } from 'react-dom'
import HomePage from './Pages/HomePage';


// 自定义组件
function App() {
    return <div>
        <HomePage/>
    </div>
}

render(<App />, document.getElementById('root'))