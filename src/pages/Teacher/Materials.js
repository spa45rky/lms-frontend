import React, { useState } from "react";
import axios from "axios";


const Materials = () => {

    const [getMaterials, setMaterials] = useState([]);

    const getMaterialsInfo = async() => {
        const data = await axios.get("http://localhost:3000/materials");
        const json_data = JSON.parse(data);
        setMaterials(json_data);
    };

    React.useEffect(() => {
        getMaterialsInfo();
    }. []);

    return (
        <div>
            {getMaterials.map(material => 
                return (
                    <div>
                        {material}
                    </div>
                );    
            )}
        </div>
    );
};

export default Materials;