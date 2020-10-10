import React, {useEffect} from 'react';
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {getEmployees} from "../../store/actions/employeeActions";
import EmployeeBodyButtons from "../employee-body-buttons";
import EmployeeCard from "../employee-card";

const onMount = (props) => () => {
    props.getEmployees();
};

function EmployeeBody(props){
    useEffect(onMount(props), []);

    const employeeCards = props.employeeReducer.employees.map(employee => (
        <EmployeeCard firstName={employee.firstName}
                      lastName={employee.lastName}
                      birthDate={employee.birthDate}
                      salary={employee.salary}
                      status={employee.status}
                      hireDate={employee.hireDate}
        />
    ));

    return (
        <div className="container">
            <Row gutter={20}>
                <Col span={6}>
                    <EmployeeBodyButtons/>
                </Col>
                <Col span={18}>
                    <Row gutter={20}>
                        {employeeCards}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    employeeReducer: state.employeeReducer
});

const mapDispatchToProps = {
    getEmployees
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeBody);