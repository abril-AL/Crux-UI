import React, { useState } from "react";
import './App.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Badge } from "react-bootstrap";

import { addTrial } from './firebase';
import { test } from "./Pics";
import { images } from "./Pics";

function PostTrial(user, rand) {
    const [q1, setq1] = useState('');
    const [q2, setq2] = useState('');
    const [q3, setq3] = useState('');
    const [fin, finish] = useState(false);
    const [swipe_dict, setSD] = useState(['', '', '', '', '', '', '', '', '', '']);
    //console.log(test[0]);
    function updateSwipes(i, value) {
        const newSwipeDict = [...swipe_dict];
        newSwipeDict[i] = value;
        setSD(newSwipeDict);
    }
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
                <button onClick={() => console.log(test[0])}>test</button>
                <span id="content1"></span>
                <text>Please mark how you would "swipe" for each image</text>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][0]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-s1`}
                                onChange={() => updateSwipes(0, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(0, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(0, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][1]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(1, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(1, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(1, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][2]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(2, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(2, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(2, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][3]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(3, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(3, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(3, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][4]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(4, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(4, 'Right')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(4, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][5]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(5, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(5, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(5, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][6]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(6, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(6, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(6, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][7]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(7, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(7, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(7, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][8]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(8, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(8, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(8, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[test[0][9]]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(9, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(9, 'Right')}
                            />
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(9, 'Neither')}
                            />
                        </div>
                    ))}
                </Form>

                <Button onClick={() => finish(sendData(user['user']['user'], q1, q2, q3, swipe_dict))} >
                    Submit
                </Button >
            </>
        );
    }
}

function sendData(user, q1, q2, q3, swipe_dict) {
    console.log(swipe_dict);
    const randInd = test[0];
    const sendDict = {};
    const i = 0;
    while (sendDict.length < 10) {
        sendDict[randInd[i]] = swipe_dict[i];
        i += 1;
    }
    console.log(sendDict)
    user.push(q1);
    user.push(q2);
    user.push(q3);
    const send = {
        Name: user[0], gender: user[1], sexual_orientation: user[2], addition_info: user[3],
        describe_type: user[4], stuck_out: user[5], recognize: user[6], swipe: sendDict
    }
    addTrial(send);
    return true;
}

export { PostTrial };