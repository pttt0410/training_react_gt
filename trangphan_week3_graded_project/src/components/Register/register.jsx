import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import { login, register } from "../../service/user.service";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);
    // const [user, setUser] = useState();

    const handleOnClick = async () => {
        setLoading(false);
        register({ username, password, email }).then(res => res.json()).then(data => navigate('/login'));
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

                        <TextField label="email"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                const data = e.target.value;

                                setEmail(data)

                                if (data.includes('@')) {
                                    setEmailError("");
                                } else {
                                    setEmailError("Field Email is invalid");
                                }
                            }} />
                        <Typography id='emailerror' sx={{ mb: 1 }} align="right" color="red">{emailError}</Typography>

                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="Password"
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                const data = e.target.value;

                                setPassword(data);
                                if (data.length < 6) {
                                    setPasswordError('Field Password can not be less then 6 chars')
                                } else {
                                    setPasswordError("")
                                }

                            }} />
                        <Typography id='passworderror' sx={{ mb: 1 }} align="right" color="red">{passwordError}</Typography>

                    </FormControl>
                    <br />

                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Button id="register" disabled={password.length < 6 || username.length < 3 || !email.includes('@')} variant="contained" size="medium" onClick={handleOnClick} >Submit</Button>
                    </FormControl>

                    <Typography id='error' sx={{ mb: 1 }} align="center" color="red">{error}</Typography>


                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Link href="/login" align="right">If you had account. Please Login!</Link>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default RegisterComponent;