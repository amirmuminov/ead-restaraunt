import React, {useState} from 'react';
import {DatePicker, Space, Form, Input, Modal} from 'antd';
import {connect} from "react-redux";
import {addEmployee} from "../../store/actions/employeeActions";

function EmployeeAddModal(props){

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        salary: 0
    });

    const onchange = e => {
        setEmployee({...employee, [e.target.name]: e.target.value});
    };

    const addEmployee = () => {
        props.addEmployee(employee);
    }

    function changeDate(date, dateString) {
        setEmployee({...employee, birthDate: dateString});
    }

    return (
        <Modal
            title="New employee"
            visible={props.employeeAddModalVisibility}
            onCancel={() => props.setEmployeeAddModalVisibility(false)}
            okText="Add"
            onOk={addEmployee}
        >
            <Form
                name="employee-add-form"
                {...layout}
            >
                <Form.Item
                    label="First Name"
                    name="first-name"
                    rules={[{ required: true, message: 'Please input first name!' }]}
                >
                    <Input onChange={onchange} value={employee.firstName} name="firstName"/>
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last-name"
                    rules={[{ required: true, message: 'Please input last name!' }]}
                >
                    <Input onChange={onchange} value={employee.lastName} name="lastName"/>
                </Form.Item>
                <Form.Item
                    label="Birth Date"
                    name="birth-date"
                    rules={[{ required: true, message: 'Please input meal description!' }]}
                >
                    <DatePicker onChange={changeDate}/>
                </Form.Item>
                <Form.Item
                    label="Salary"
                    name="salary"
                    rules={[{ required: true, message: 'Please input salary!' }]}
                >
                    <Input onChange={onchange} value={employee.salary} name="salary"/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    employeeReducer: state.employeeReducer
});

const mapDispatchToProps = {
    addEmployee
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeAddModal);