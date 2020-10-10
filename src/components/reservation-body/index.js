import React, {useEffect} from 'react';
import {Col, Row} from "antd";
import {connect} from "react-redux";
import ReservationBodyButtons from "../reservation-body-buttons";
import {getReservations} from "../../store/actions/reservationActions";
import ReservationCard from "../reservation-card";

const onMount = (props) => () => {
    props.getReservations();
};

function ReservationBody(props){

    useEffect(onMount(props), []);

    const reservationList = props.reservationReducer.reservations.map(reservation => (
       <ReservationCard id={reservation.id}
                        mobilePhone={reservation.mobilePhone}
                        startDate={reservation.startDate}
                        endDate={reservation.endDate}
                        firstName={reservation.employee.firstName}
                        lastName={reservation.employee.lastName}
                        employeeId={reservation.employee.id}
       />
    ));

    return (
        <div className="container">
            <Row gutter={20}>
                <Col span={6}>
                    <ReservationBodyButtons/>
                </Col>
                <Col span={18}>
                    <Row gutter={20}>
                        {reservationList}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    reservationReducer: state.reservationReducer
});

const mapDispatchToProps = {
    getReservations
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReservationBody);