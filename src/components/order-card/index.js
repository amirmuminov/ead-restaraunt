import React, {useState} from 'react';
import {Button, Card, Col} from "antd";
import {connect} from "react-redux";
import {cancelOrder, payOrder} from "../../store/actions/ordersActions";


function OrderCard(props){

    const mealList = props.meals.map(meal => (
        <div>{meal.name}</div>
    ));


    const cancelOrder = id => {
        props.cancelOrder(id);
    }

    const payOrder = id => {
        props.payOrder(id);
        props.setOrderBillModalVisibility(true);
    }

    const cancelButton = (<Button type="primary" danger onClick={() => cancelOrder(props.id)}>Cancel</Button>);
    const payButton = (<Button type="primary" onClick={() => payOrder(props.id) }>Pay</Button>);

    return (
        <Col span={8}>
            <Card title={props.id} style={{marginBottom: 20}}>
                <div>
                    Created date: {props.createdDate}
                </div>
                <div>
                    Status: {props.status}
                </div>
                <div>
                    Receiver: {props.receiver.firstName + ' ' + props.receiver.lastName + ' ' + props.receiver.id}
                </div>
                <div>
                    Meals:
                    {mealList}
                </div>
                <div>
                    {props.status == 'NOT_PAYED' && cancelButton}
                    {props.status == 'NOT_PAYED' && payButton}
                </div>
            </Card>
        </Col>
    );
}

const mapStateToProps = state => ({
    ordersReducer: state.ordersReducer
});

const mapDispatchToProps = {
    cancelOrder,
    payOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderCard);