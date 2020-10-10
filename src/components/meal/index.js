import React from 'react';
import './meal.css';
import {Col, Row} from "antd";
import { Card } from 'antd';

const { Meta } = Card;

function Meal(props){
    return (
        <Col span={6} className="meal" className="meal">
            <Card
                hoverable
                cover={<img alt="example" src="https://i.insider.com/5d0bc2a0e3ecba03841d82d2?width=960&format=jpeg" />}
            >
                <span>{props.name}</span>
                <p>{props.description}</p>
                <span>{props.price} KZT</span>
            </Card>
        </Col>
    );
}

export default Meal;