import React, { createContext, useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import { login } from "../../service/user.service";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const LoginComponent = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [user, setUser] = useState();

    const handleOnClick = () => {
        login({ username, password }).then(res => res.json()).then(data => {
            if(data.length > 0) {
                setUser(data[0]);
                localStorage.setItem('user', JSON.stringify(data[0]));
                auth.login(data[0]);
                navigate('/');
            } else {
                setError('Username or Password is wrong');
            }
        });

    }

    return (
        <>
            <Container maxWidth="sm" sx={{ mt: 1 }}>

                <Box>
                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <TextField label="Username"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => {
                                const data = e.target.value;
                                setUsername(data);

                                if (data.length < 3) {
                                    setUsernameError('Field Username can not be less then 3 chars')
                                } else {
                                    setUsernameError("")
                                }
                            }} />
                        <Typography id='usererror' sx={{ mb: 1 }} align="right" color="red">{usernameError}</Typography>

                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="Password"
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) =>  setPassword(e.target.value)} />

                    </FormControl>
                    <br />

                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Button id="login" disabled={username.length < 3 || !password} variant="contained" size="medium" onClick={handleOnClick} >Submit</Button>
                    </FormControl>
                    <Typography id='error' sx={{ mb: 1 }} align="center" color="red">{error}</Typography>


                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Link href="/register" align="right">Create new account!</Link>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default LoginComponent;