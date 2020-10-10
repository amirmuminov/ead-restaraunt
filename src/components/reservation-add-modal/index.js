import React, {useEffect, useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {connect} from "react-redux";
import {addReservation, getTables} from "../../store/actions/reservationActions";
import { DatePicker, Select } from 'antd';
import {getEmployees} from "../../store/actions/employeeActions";

const onMount = (props) => () => {
    props.getTables();
    props.getEmployees();
};

function ReservationAddModal(props){

    useEffect(onMount(props), []);

    const { Option } = Select;

    const { RangePicker } = DatePicker;

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const [reservation, setReservation] = useState({
        mobilePhone: '',
        startDate: '',
        endDate: '',
        employee: {
            id: null
        },
        table:{
            id: null
        }
    });

    const onchange = e => {
        setReservation({...reservation, [e.target.name]: e.target.value});
    };

    const addReservation = () => {
        props.addReservation(reservation);
        props.setReservationAddModalVisibility(false);
    }

    function onChange(value, dateString) {
        setReservation({...reservation, startDate: dateString[0], endDate: dateString[1]})
    }

    const tableList = props.reservationReducer.tables.map(table => (
        <Option key={table.id}>{table.id}</Option>
    ))

    const employeeList = props.employeeReducer.employees.map(employee => (
        <Option key={employee.id}>{employee.firstName + ' ' + employee.lastName + ' ' + employee.id}</Option>
    ))

    const changeTable = table => {
        setReservation({...reservation, table: {id: table}})
    }

    const changeEmployee = employee => {
        setReservation({...reservation, employee: {id: employee}})
    }

    return (
        <Modal
            title="New reservation"
            visible={props.reservationAddModalVisibility}
            onCancel={() => props.setReservationAddModalVisibility(false)}
            okText="Add"
            onOk={addReservation}
        >
            <Form
                name="reservation-add-form"
                {...layout}
            >
                <Form.Item
                    label="Mobile phone"
                    name="mobile-phone"
                    rules={[{ required: true, message: 'Please input mobile phone!' }]}
                >
                    <Input onChange={onchange} value={reservation.mobilePhone} name="mobilePhone"/>
                </Form.Item>
                <Form.Item
                    label="Reservation time"
                    name="reservation-time"
                    rules={[{ required: true, message: 'Please input reservation time!' }]}
                >
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onChange={onChange}
                    />
                </Form.Item>
                <Form.Item
                    label="Table"
                    name="table"
                    rules={[{ required: true, message: 'Please input table!' }]}
                >
                    <Select onChange={changeTable}>
                        {tableList}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Employee"
                    name="employee"
                    rules={[{ required: true, message: 'Please input уьздщнуу!' }]}
                >
                    <Select onChange={changeEmployee}>
                        {employeeList}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    reservationReducer: state.reservationReducer,
    employeeReducer: state.employeeReducer
});

const mapDispatchToProps = {
    addReservation,
    getTables,
    getEmployees
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReservationAddModal);