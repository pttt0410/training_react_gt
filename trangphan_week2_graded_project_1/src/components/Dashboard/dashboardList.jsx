import React from "react";

const DashboardList = ({data}) => {
    return (
        <div>
            {
                data.length > 0 ?
                    data.map((item, index) => (
                        <div className="dashboard-item" key={index} ><a href={`/dashboard/${item.id}`}>{item.name}</a> </div>
                    ))
                    : null
            }
        </div>
    )
};

export default DashboardList;