import React, {useEffect} from 'react';
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {getDeliveries} from "../../store/actions/deliveryActions";
import DeliveryCard from "../delivery-card";
import DeliveryBodyButtons from "../delivery-buttons";

const onMount = (props) => () => {
    props.getDeliveries();
};

function DeliveryBody(props){

    useEffect(onMount(props), []);

    const deliveryList = props.deliveryReducer.deliveries.map(delivery => (
        <DeliveryCard id={delivery.id}
                   createdDate={delivery.createdDate}
                   status={delivery.status}
                   receiver={delivery.receiver}
                   meals={delivery.meals}
        />
    ));

    return (
        <div className="container">
            <Row gutter={20}>
                <Col span={6}>
                    <DeliveryBodyButtons/>
                </Col>
                <Col span={18}>
                    <Row gutter={20}>
                        {deliveryList}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    deliveryReducer: state.deliveryReducer
});

const mapDispatchToProps = {
    getDeliveries
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeliveryBody);