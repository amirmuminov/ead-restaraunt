import React, {useState} from 'react';
import {Button} from "antd";
import TableAddModal from "../table-add-modal";
import OrderAddModal from "../order-add-modal";
import DeliveryAddModal from "../delivery-add-modal";

function DeliveryBodyButtons(){

    const [deliveryAddModalVisibility, setDeliveryAddModalVisibility] = useState(false);

    return (
        <div>
            <Button type="primary" className="active-button" onClick={() => setDeliveryAddModalVisibility(true)}>Add delivery</Button>
            <DeliveryAddModal deliveryAddModalVisibility={deliveryAddModalVisibility}
                           setDeliveryAddModalVisibility={setDeliveryAddModalVisibility}/>
        </div>
    );
}

export default DeliveryBodyButtons;