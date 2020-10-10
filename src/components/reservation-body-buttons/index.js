import React, {useState} from 'react';
import {Button} from "antd";
import EmployeeAddModal from "../employee-add-modal";
import TableAddModal from "../table-add-modal";
import ReservationAddModal from "../reservation-add-modal";

function ReservationBodyButtons(){

    const [tableAddModalVisibility, setTableAddModalVisibility] = useState(false);
    const [reservationAddModalVisibility, setReservationAddModalVisibility] = useState(false);

    return (
        <div>
            <Button type="primary" className="active-button" onClick={() => setTableAddModalVisibility(true)}>Add table</Button>
            <Button type="primary" className="active-button" onClick={() => setReservationAddModalVisibility(true)}>Add reservation</Button>
            <TableAddModal tableAddModalVisibility={tableAddModalVisibility}
                           setTableAddModalVisibility={setTableAddModalVisibility}/>
            <ReservationAddModal reservationAddModalVisibility={reservationAddModalVisibility}
                                 setReservationAddModalVisibility={setReservationAddModalVisibility}/>
        </div>
    );
}

export default ReservationBodyButtons;