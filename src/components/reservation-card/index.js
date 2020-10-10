import React from 'react';
import {Card, Col} from "antd";


function ReservationCard(props){

    return (
        <Col span={8}>
            <Card title={props.id} style={{marginBottom: 20}}>
                <div>
                    Mobile phone: {props.mobilePhone}
                </div>
                <div>
                    Start date: {props.startDate}
                </div>
                <div>
                    End date: {props.endDate}
                </div>
                <div>
                    Employee: {props.firstName + ' ' + props.lastName + ' ' + props.employeeId}
                </div>
            </Card>
        </Col>
    );
}


export default ReservationCard;