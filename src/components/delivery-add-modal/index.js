import React, {useEffect, useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {connect} from "react-redux";
import {addReservation, getTables} from "../../store/actions/reservationActions";
import { DatePicker, Select } from 'antd';
import {getEmployees} from "../../store/actions/employeeActions";
import {getMeals} from "../../store/actions/menuActions";
import {addOrder} from "../../store/actions/ordersActions";
import {addDelivery} from "../../store/actions/deliveryActions";

const onMount = (props) => () => {
    props.getMeals();
    props.getEmployees();
};

function DeliveryAddModal(props){

    useEffect(onMount(props), []);

    const { Option } = Select;

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const [delivery, setDelivery] = useState({
        address: '',
        receiver:{
            id: null
        },
        meals:[]
    });

    const onchange = e => {
        setDelivery({...delivery, [e.target.name]: e.target.value});
    };

    const addOrder = () => {
        props.addDelivery(delivery);
        props.setDeliveryAddModalVisibility(false);
    }

    const employeeList = props.employeeReducer.employees.map(employee => (
        <Option key={employee.id}>{employee.firstName + ' ' + employee.lastName + ' ' + employee.id}</Option>
    ))

    const mealList = props.menuReducer.meals.map(meal => (
        <Option key={meal.id}>{meal.name}</Option>
    ))

    const changeEmployee = employee => {
        setDelivery({...delivery, receiver: {id: employee}})
    }

    const mealChange = (meals) => {
        let orderMeals = [];
        for(let i = 0; i < meals.length; i++){
            orderMeals.push({id: meals[i]});
        }
        setDelivery({...delivery, meals: orderMeals});
    }

    return (
        <Modal
            title="New delivery"
            visible={props.deliveryAddModalVisibility}
            onCancel={() => props.setDeliveryAddModalVisibility(false)}
            okText="Add"
            onOk={addOrder}
        >
            <Form
                name="order-add-form"
                {...layout}
            >
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input address!' }]}
                >
                    <Input onChange={onchange} value={delivery.name} name="name"/>
                </Form.Item>
                <Form.Item
                    label="Employee"
                    name="employee"
                    rules={[{ required: true, message: 'Please input employee!' }]}
                >
                    <Select onChange={changeEmployee}>
                        {employeeList}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Meals"
                    name="meals"
                    rules={[{ required: true, message: 'Please input meals!' }]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Please select"
                        onChange={mealChange}
                    >
                        {mealList}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    employeeReducer: state.employeeReducer,
    menuReducer: state.menuReducer
});

const mapDispatchToProps = {
    getMeals,
    getEmployees,
    addDelivery
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeliveryAddModal);