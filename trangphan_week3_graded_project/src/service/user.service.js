
const { API } = require("../api/api");

const validUser = () => {
    
   return fetch(`${API}/User`)
    
}

const login = (body) => {
    return fetch(`${API}/User?username=${body.username}&&password=${body.password}`);
}

const register = (body) => {
    return fetch(`${API}/User`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: body.username,
            email: body.email,
            password: body.password,
        })}
    )
}
module.exports= {
    validUser,
    login,
    register,
}