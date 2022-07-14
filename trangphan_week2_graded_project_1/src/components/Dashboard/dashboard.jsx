import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { addDashboard, getDashBoard } from "../../service/dashboard.service";
import DashboardList from "./dashboardList";
import './dashboard.css'
import { useParams } from 'react-router-dom'


const Dashboard = () => {
    const [dashboard, setDashboard] = useState([]);
    const [listDashboard, setListDashboard] = useState([]);

    useEffect(() => {

        getDashBoard().then(res => res.json()).then(data => setListDashboard([...data]));
    }, []);

    const handleOnClick = () => {
        addDashboard({ name: dashboard });
    }

    return (

        <div className="m-16">
            <h3>Create Dashboard</h3>
            <TextField
                label='Name'
                name="name"
                value={dashboard}
                onChange={(e) => setDashboard(e.target.value)}
            />


            <Button onClick={() => handleOnClick()} >Submit</Button>

            <DashboardList data={listDashboard} />



        </div>
    )
}
export default Dashboard;