import React, {useState} from 'react';
import {Button} from "antd";
import EmployeeAddModal from "../employee-add-modal";

function EmployeeBodyButtons(){

    const [employeeAddModalVisibility, setEmployeeAddModalVisibility] = useState(false);

    return (
        <div>
            <Button type="primary" className="active-button" onClick={() => setEmployeeAddModalVisibility(true)}>Add employee</Button>
            <EmployeeAddModal employeeAddModalVisibility={employeeAddModalVisibility}
                              setEmployeeAddModalVisibility={setEmployeeAddModalVisibility}/>
        </div>
    );
}

export default EmployeeBodyButtons;