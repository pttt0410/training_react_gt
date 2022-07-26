import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import { login, register } from "../../service/user.service";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
    const navigate = useNavigate(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
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
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
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
                        <Link href="/login" align="right">If you had account. Please Login!</Link>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default RegisterComponent;