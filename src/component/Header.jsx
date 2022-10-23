import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { loginUser } from '../context/context';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../App.css'


function Header() {
    const [login, setLogin] = useState();
    const navigat = useNavigate();
    const { loginUsers, setLoginUsers } = useContext(loginUser)

    useEffect(() => {
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        if (user) {
            setLogin(user)
            setLoginUsers(user)
        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('user')
        setLogin('')
        setLoginUsers('')
    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{ background: "#3B3B3B" }}>
                <Toolbar>
                    <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
                        The Breaking Bad API
                    </Typography>
                    {login ? <Button color="inherit" onClick={handleLogOut}>{login.username}</Button> : <Button color="inherit" onClick={() => navigat('/Login')} >Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header; 