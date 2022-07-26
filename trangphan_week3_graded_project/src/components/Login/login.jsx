import React, { createContext, useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import { login } from "../../service/user.service";
import AuthContext from "../../context/AuthContext";


const LoginComponent = () => {
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    const handleOnClick = () => {
        login({ username, password }).then(res => res.json()).then(data => setUser(data[0]));
    }

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            auth.login(user);
        }
    }, [user])

    return (
        <>
            <Container maxWidth="sm" sx={{ mt: 1 }}>

                <Box>
                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="Username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <br />

                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Button variant="contained" size="medium" onClick={handleOnClick} >Submit</Button>
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Link href="/register" align="right">Create new account!</Link>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default LoginComponent;