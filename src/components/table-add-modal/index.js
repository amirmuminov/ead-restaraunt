import React, {useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {connect} from "react-redux";
import {addTable} from "../../store/actions/reservationActions";

function TableAddModal(props){

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const [table, setTable] = useState({
        seatsNumber: 0
    });

    const onchange = e => {
        setTable({...table, [e.target.name]: e.target.value});
    };

    const addTable = () => {
        props.addTable(table);
    }

    return (
        <Modal
            title="New table"
            visible={props.tableAddModalVisibility}
            onCancel={() => props.setTableAddModalVisibility(false)}
            okText="Add"
            onOk={addTable}
        >
            <Form
                name="table-add-form"
                {...layout}
            >
                <Form.Item
                    label="Number of seats"
                    name="number-of-seats"
                    rules={[{ required: true, message: 'Please input number of seats!' }]}
                >
                    <Input onChange={onchange} value={table.seatsNumber} name="seatsNumber"/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    reservationReducer: state.reservationReducer
});

const mapDispatchToProps = {
    addTable
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableAddModal);