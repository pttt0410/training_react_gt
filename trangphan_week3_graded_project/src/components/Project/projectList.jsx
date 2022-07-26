import React from "react";
import Milestones from "../Milestones/milestonesList";

const ProjectList = ({ list }) => {

    return (
        <>
            <div className="m-16">
                {
                    list && list.length > 0 ?
                        list.map((item, i) => (
                            <div key={i}>
                                <h3 >Project name: {item.name}</h3>
                                <Milestones project={item}></Milestones>
                            </div>
                        ))
                        : null
                }
            </div>
        </>
    )
}

export default ProjectList;