const { API } = require("../api/api");

const addDashboard = (body) => {
    return fetch(`${API}/Dashboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: body.name,
        })}
    )

}

const getDashBoard = () => {
    return fetch(`${API}/Dashboard`);
}

const getDashBoardById = (id) => {
    return fetch(`${API}/Dashboard/${id}`);

}

module.exports = {
    addDashboard,
    getDashBoard,
    getDashBoardById,

}