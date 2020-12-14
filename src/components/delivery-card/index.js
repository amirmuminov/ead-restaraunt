import React from 'react';
import {Button, Card, Col} from "antd";
import {connect} from "react-redux";
import {finishDelivery} from "../../store/actions/deliveryActions";


function DeliveryCard(props){

    const mealList = props.meals.map(meal => (
        <div>{meal.name}</div>
    ));

    const finishDelivery = id => {
        props.finishDelivery(id);
    }

    const finishButton = (<Button type="primary" danger onClick={() => finishDelivery(props.id)}>Finish</Button>);

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
                    {props.status == 'OPENED' && finishButton}
                </div>
            </Card>
        </Col>
    );
}

const mapStateToProps = state => ({
    deliveryReducer: state.deliveryReducer
});

const mapDispatchToProps = {
    finishDelivery
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeliveryCard);