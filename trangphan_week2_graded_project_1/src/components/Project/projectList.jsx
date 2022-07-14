import React from "react";
import Milestones from "../Milestones/milestonesList";
import { useState } from "react";
import { useEffect } from "react";
import { validUser } from "../../service/user.service";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import { addMileStone } from "../../service/project.service";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProjectList = ({ list, setReload }) => {
    const [users, setUsers] = useState();

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [status, setStatus] = useState('');
    const [assignedId, setAssignedId] = useState('');
    const [index, setindex] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = (index) => {
        setOpen(true);
        setindex(index);
    };
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 280,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    };

    useEffect(() => {
        validUser().then(res => res.json()).then(data => setUsers([...data]));
    }, []);

    const handleOnClick = (event) => {
        event.preventDefault();
        const project = list[index];
        addMileStone({
            id: project.id,
            name: project.name,
            dashboardId: project.dashboardId,
            milestones: [...project.milestones, {
                id: project.milestones.length + 1,
                end: end,
                start: start,
                status: status,
                assignedId: assignedId
            }
            ]
        });
        setReload(true);
        handleClose();
    }

    return (
        <>
            <div className="m-16">
                {
                    list && list.length > 0 ?
                        list.map((item, i) => (
                            <div key={i}>
                                <h3 >{item.name} <AddCircleIcon onClick={() => handleOpen(i)} color="primary" /></h3>
                                <Milestones list={item.milestones} users={users}></Milestones>
                            </div>
                        ))
                        : null
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="Start"
                            name="start"
                            value={start}
                            onChange={(e) => setStart(e.target.value)} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>

                        <TextField label="End"
                            name="end"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value={'Completed'}>Completed</MenuItem>
                            <MenuItem value={'Inprogress'}>Inprogress</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <InputLabel id="demo-simple-select-label">Assigned</InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={assignedId}
                            label="assignedId"
                            onChange={(e) => setAssignedId(e.target.value)}
                        >
                            {
                                users && users.length > 0 ?
                                    users.map(user => <MenuItem key={user.id} value={user.id}>{user.userName}</MenuItem>)
                                    : null
                            }
                        </Select>
                    </FormControl>

                    <br />

                    <Button onClick={handleOnClick} >Submit</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ProjectList;