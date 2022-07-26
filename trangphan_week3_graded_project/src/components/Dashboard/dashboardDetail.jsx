import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from 'react-router-dom'
import { getDashBoardById } from "../../service/dashboard.service";
import { getProjectByDashboardID } from "../../service/project.service";
import ProjectList from './../Project/projectList';


const DashboardDetail = () => {

    const params = useParams();
    const id = params?.id ? params.id : 1;
    const [detail, setDetail] = useState();
    const [listProject, setListProject] = useState();

    const [isReload, setReload] = useState(true);



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


    return (
        <div className="m-16">
            {detail ? <h1>{detail.name} </h1> : null}
            <ProjectList list={listProject} />
        </div>
    )
}

export default DashboardDetail;