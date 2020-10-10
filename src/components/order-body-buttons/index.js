import React, {useState} from 'react';
import {Button} from "antd";
import TableAddModal from "../table-add-modal";
import OrderAddModal from "../order-add-modal";

function OrderBodyButtons(){

    const [orderAddModalVisibility, setOrderAddModalVisibility] = useState(false);

    return (
        <div>
            <Button type="primary" className="active-button" onClick={() => setOrderAddModalVisibility(true)}>Add order</Button>
            <OrderAddModal orderAddModalVisibility={orderAddModalVisibility}
                           setOrderAddModalVisibility={setOrderAddModalVisibility}/>
        </div>
    );
}

export default OrderBodyButtons;