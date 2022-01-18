import React, { useState } from "react";
import axios from "axios";


const ViewAttemptedAssignments = () => {

    const [getAttemptAssign, setAttemptAssign] = useState();

    const getAssignData = async() => {
        const data = await axios.get("http://localhost:3000/viewattassign");
        const json_data = JSON.parse(data);
        setAttemptAssign(data);
    };

    React.useEffect(() => {
        getAssignData();
    });

    // return (
    //     <div>
            
    //     </div>
    // );
    const getAssignData = async() => {
        conss
    };
    
};

export default ViewAttemptedAssignments;