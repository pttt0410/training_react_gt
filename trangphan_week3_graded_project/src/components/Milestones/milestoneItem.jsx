import React from "react";
import Grid from '@mui/material/Grid';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const MilestoneItem = ({ item, openModal, index }) => {

    const auth = useContext(AuthContext);

    return (
        <>
            {auth.user?.id === item.assignedId ?
                <Grid item xs={6} key={item.id}>
                    <div className="milestone-item" >
                        <a onClick={() => openModal(item.id, index)}>{item.title}</a>
                        <p>{item.start}-{item.end}</p>
                        <p>{item.status}</p>
                    </div>
                </Grid> : null

            }

        </>
    )
};

export default MilestoneItem;