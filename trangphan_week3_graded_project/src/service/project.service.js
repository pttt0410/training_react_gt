const { API } = require("../api/api");

const getProjectByDashboardID = (id) => {
    return fetch(`${API}/Project?dashboardId=${id}`);
};

const createProject = (body) => {
    return fetch(`${API}/Project`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: body.name,
            dashboardId: body.dashboardId,
            milestones: [],
        })}
    )

}

const addMileStone = (body) => {
    return fetch(`${API}/Project/${body.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            milestones: body.milestones,
            name: body.name,
            dashboardId: body.dashboardId,
        })}
    )
}

module.exports = {
    getProjectByDashboardID,
    createProject,
    addMileStone,
}