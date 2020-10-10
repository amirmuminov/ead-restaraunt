import React, {useEffect, useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {connect} from "react-redux";
import {addReservation, getTables} from "../../store/actions/reservationActions";
import { DatePicker, Select } from 'antd';
import {getEmployees} from "../../store/actions/employeeActions";
import {getMeals} from "../../store/actions/menuActions";
import {addOrder, cancelOrder, payOrder} from "../../store/actions/ordersActions";
import ordersReducer from "../../store/reducers/ordersReducer";


function OrderBillModal(props){

    const orderBill = props.ordersReducer.orderBill;

    const mealList = props.ordersReducer.orderBill.order.meals.map(meal => (
        <div>{meal.name}</div>
    ));

    return (
        <Modal
            title="Order bill"
            visible={props.orderBillModalVisibility}
            onCancel={() => props.setOrderBillModalVisibility(false)}
            okText="Ok"
        >
            <div>ID: {orderBill.order.id}</div>
            <div>Receiver: {orderBill.order.receiver.id + ' ' + orderBill.order.receiver.firstName + ' ' + orderBill.order.receiver.lastName}</div>
            <div>Meals: {mealList}</div>
            <div>Bill: {orderBill.bill}</div>
        </Modal>
    );
}


const mapStateToProps = state => ({
    ordersReducer: state.ordersReducer
});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderBillModal);