import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import MilestoneItem from "./milestoneItem";
import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addMileStone } from "../../service/project.service";

const Milestones = ({ project }) => {

    const auth = useContext(AuthContext);
    const [milestones, setMilestones] = useState();
    const [status, setStatus] = useState();
    const [indexActive, setIndex] = useState();
    const [open, setOpen] = useState(false);
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
    }

    useEffect(() => {
        if (project) {
            setMilestones(project.milestones);
        }
    }, [project])

    const handleOnClick = (event) => {
        event.preventDefault();
        project.milestones[indexActive].status = status;
        addMileStone({
            id: project.id,
            name: project.name,
            dashboardId: project.dashboardId,
            milestones: project.milestones
        });
        handleClose();
    }

    const openModal = (id, index) => {
        setOpen(true);
        setIndex(index);
        setStatus(milestones[index].status);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={2}>
                    {
                        milestones && milestones.length > 0 ?
                            milestones.map((item, i) => <MilestoneItem key={item.id} item={item} index={i} openModal={openModal} />)
                            : null
                    }
                </Grid>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Update Status Task</h3>
                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={status}
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value={'Start'}>Start</MenuItem>
                            <MenuItem value={'Inprogress'}>Inprogress</MenuItem>
                            <MenuItem value={'Completed'}>Completed</MenuItem>
                        </Select>
                    </FormControl>

                    <br />

                    <Button onClick={handleOnClick} >Submit</Button>
                </Box>
            </Modal>
        </>
    )
};

export default Milestones;