import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Milestones = ({ list, users }) => {

    const getUser = (id) => {
        if (users) {
            const user = users.find(user => user.id === id);
            return user?.userName;
        }

    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={2}>
                    {
                        list && list.length > 0 ?
                            list.map((item, i) => (
                                <Grid item xs={6} key={i}>
                                    <div className="milestone-item" >
                                        <p>{item.name}</p>
                                        <p>{item.start}-{item.end}</p>
                                        <p>{item.status}</p>
                                        <p>{users.find(user => user.id === item.assignedId)?.userName}</p>
                                    </div>
                                </Grid>
                            ))
                            : null
                    }
                </Grid>
            </Box>



        </>
    )
};

export default Milestones;