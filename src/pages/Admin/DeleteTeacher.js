import React, { useState } from "react";

let id = 0;
function createData(option, type) {
    id += 1;
    return { id, option, type };
}

let rows = [
    createData("Teacher1", ""),
    createData("Teacher2", ""),
    createData("Teacher3", ""),
    createData("Teacher4", "Private"),
];

const DeleteTeacherComponent = () => {
    const [getTeacher, setTeacher] = useState([]);

    return (
        <div style={{ alignItems: "center" }}>
            <h2>Delete Teacher</h2>

            <table style={{ border: "1px solid" }}>
                <tr>
                    <th colspan="2">Teachers</th>
                </tr>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>{row.option}</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default DeleteTeacherComponent;
