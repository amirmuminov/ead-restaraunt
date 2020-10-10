import React from 'react';
import {Card, Col} from "antd";


function EmployeeCard(props){

    return (
        <Col span={8}>
            <Card title={props.firstName + ' ' + props.lastName} style={{marginBottom: 20}}>
                <div>
                    Date of birth: {props.birthDate}
                </div>
                <div>
                    Hire of birth: {props.hireDate}
                </div>
                <div>
                    Status: {props.status}
                </div>
                <div>
                    Salary: {props.salary}
                </div>
            </Card>
        </Col>
    );
}


export default EmployeeCard;