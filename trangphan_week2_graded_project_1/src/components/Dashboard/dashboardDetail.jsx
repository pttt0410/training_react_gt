import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from 'react-router-dom'
import { getDashBoardById } from "../../service/dashboard.service";
import { createProject, getProjectByDashboardID } from "../../service/project.service";
import ProjectList from './../Project/projectList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";

const DashboardDetail = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState();
    const [listProject, setListProject] = useState();
    const [newProject, setNewProject] = useState("");

    const [open, setOpen] = useState(false);
    const [isReload, setReload] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        minWidth: 280,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        getDashBoardById(id).then(res => res.json()).then(data => setDetail(data));
    }, []);

    useEffect(() => {
        if (isReload) {
            getProjectByDashboardID(id).then(res => res.json()).then(data => {
                setListProject([...data]);
                setReload(false);
            });
        }

    }, [isReload]);

    const handleOnClick = (event) => {
        event.preventDefault()

        createProject({
            name: newProject,
            dashboardId: id
        });
        setReload(true);

        handleClose();
    }


    return (
        <div className="m-16">
            {detail ? <h1>{detail.name} <AddCircleIcon onClick={handleOpen} color="primary" /></h1> : null}
            <ProjectList list={listProject} setReload={setReload} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField label="Project Name"
                        name="newProject"
                        value={newProject}
                        onChange={(e) => setNewProject(e.target.value)} />

                    <Button onClick={(e) => handleOnClick(e)} >Submit</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default DashboardDetail;