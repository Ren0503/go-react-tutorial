import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import './App.css'

function App() {
    const [name, setName] = useState('')

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                })

                const content = await response.json()

                setName(content.name)
            }
        )()
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar name={name} setName={setName} />

                <main className="form-signin">
                    <Route path="/" exact component={() => <HomeScreen name={name} />} />
                    <Route path="/login" component={() => <LoginScreen setName={setName} />} />
                    <Route path="/register" component={RegisterScreen} />
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
