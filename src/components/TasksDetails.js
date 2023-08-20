import React from "react";
import { useParams } from "react-router-dom";

const TasksDetails = () => {
    const params = useParams();
	return <div>TasksDetails for {params.taskName}</div>;
};

export default TasksDetails;
