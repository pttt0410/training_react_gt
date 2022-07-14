
const { API } = require("../api/api");

const validUser = () => {
    
   return fetch(`${API}/User`)
    
}
module.exports= {
    validUser
}