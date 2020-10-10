import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import {connect} from "react-redux";
import ReservationBodyButtons from "../reservation-body-buttons";
import {getReservations} from "../../store/actions/reservationActions";
import OrderBodyButtons from "../order-body-buttons";
import {getOrders} from "../../store/actions/ordersActions";
import OrderCard from "../order-card";
import OrderBillModal from "../order-bill-modal";

const onMount = (props) => () => {
    props.getOrders();
};

function OrdersBody(props){

    useEffect(onMount(props), []);

    const [orderBillModalVisibility, setOrderBillModalVisibility] = useState(false);

    const ordersList = props.ordersReducer.orders.map(order => (
        <OrderCard id={order.id}
                   createdDate={order.createdDate}
                   status={order.status}
                   receiver={order.receiver}
                   meals={order.meals}
                   orderBillModalVisibility={orderBillModalVisibility}
                   setOrderBillModalVisibility={setOrderBillModalVisibility}
        />
    ));

    return (
        <div className="container">
            <Row gutter={20}>
                <Col span={6}>
                    <OrderBodyButtons/>
                </Col>
                <Col span={18}>
                    <Row gutter={20}>
                        {ordersList}
                    </Row>
                </Col>
            </Row>
            <OrderBillModal orderBillModalVisibility={orderBillModalVisibility}
                            setOrderBillModalVisibility={setOrderBillModalVisibility}/>
        </div>
    );
}

const mapStateToProps = state => ({
    ordersReducer: state.ordersReducer
});

const mapDispatchToProps = {
    getOrders
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersBody);