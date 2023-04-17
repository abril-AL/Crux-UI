import React, { useState } from "react";
import './App.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Badge } from "react-bootstrap";

import { addTrial } from './firebase';

function PostTrial(user) {
    const [q1, setq1] = useState('');
    const [q2, setq2] = useState('');
    const [q3, setq3] = useState('');
    const [fin, finish] = useState(false);
    if (fin)
        return (
            <>
                <span id="content1"></span>
                <span id="content1"></span>
                <text>
                    Thank you for your time
                </text>
            </>
        );
    else {
        return (
            <>
                <span id="content1"></span>
                <Card.Title>
                    <h3>
                        <Badge bg="secondary">Post Trial Survey</Badge>
                    </h3>
                </Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Describe your “type”</Form.Label>
                        <span id="content1"></span>
                        <input name="myInput" onChange={e => { setq1(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Were there any images that specifically stuck out to you? </Form.Label>
                        <span id="content1"></span>
                        <input name="myInput" onChange={e => { setq2(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Did you recognize/ have you seen any of these images or faces before?</Form.Label>
                        <span id="content1"></span>
                        <input name="myInput" onChange={e => { setq3(e.target.value); }} />
                    </Form.Group>
                </Form>
                <Button onClick={() => finish(sendData(user['user']['user'], q1, q2, q3))} >
                    Submit
                </Button >
            </>
        );
    }
}

function sendData(user, q1, q2, q3) {
    console.log(user);
    user.push(q1);
    user.push(q2);
    user.push(q3);
    const send = {
        Name: user[0], gender: user[1], sexual_orientation: user[2], addition_info: user[3],
        describe_type: user[4], stuck_out: user[5], recognize: user[6]
    }
    addTrial(send);
    return true;
}

export { PostTrial };