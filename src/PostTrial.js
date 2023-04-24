import React, { useState } from "react";
import './App.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Badge } from "react-bootstrap";

import { addTrial } from './firebase';
//import { test } from "./Pics-Rand";
//import { images } from "./Pics-Rand";
import { Fimages } from "./Pics-const";
import { Mimages } from "./Pics-const";
import { Bimages } from "./Pics-const";

function PostTrial({ user, imgSet }) {
    var images = imgSet[0];
    const [q1, setq1] = useState('');
    const [q2, setq2] = useState('');
    const [q3, setq3] = useState('');
    const [fin, finish] = useState(false);
    const [swipe_dict, setSD] = useState(['', '', '', '', '', '', '', '', '', '']);
    function updateSwipes(i, value) {
        const newSwipeDict = [...swipe_dict];
        newSwipeDict[i] = value;
        setSD(newSwipeDict);
    }
    console.log(swipe_dict)
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
                <button onClick={() => console.log(imgSet[1])}>test</button>
                <span id="content1"></span>
                <text>Please mark how you would "swipe" for each image</text>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[0]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-s1`}
                                onChange={() => updateSwipes(0, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(0, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(0, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[1]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(1, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(1, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(1, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[2]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(2, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(2, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(2, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[3]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(3, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(3, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(3, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[4]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(4, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(4, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(4, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[5]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(5, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(5, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(5, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[6]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(6, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(6, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(6, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[7]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(7, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(7, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(7, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[8]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(8, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(8, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(8, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <img height={50} src={images[9]}></img>
                            <span id="content1"></span>
                            <Form.Check
                                inline label="Left" name="group1" type={type} id={`inline-${type}-1`}
                                onChange={() => updateSwipes(9, 'Left')}
                            />
                            <Form.Check
                                inline label="Right" name="group1" type={type} id={`inline-${type}-2`}
                                onChange={() => updateSwipes(9, 'Right')}
                            />
                            {/*
                            <Form.Check
                                inline label="Neither/Neutral" type={type} id={`inline-${type}-3`}
                                onChange={() => updateSwipes(9, 'Neither')}
                            /> */}
                        </div>
                    ))}
                </Form>

                <Button onClick={() => { console.log(user['user']); finish(sendData(user['user'], q1, q2, q3, swipe_dict, imgSet[1])) }} >
                    Submit
                </Button >
            </>
        );
    }
}

function sendData(user, q1, q2, q3, swipe_dict, randOrd) {
    console.log("now sending: ...");
    console.log(swipe_dict);
    console.log(randOrd)
    const send = {
        Name: user[0], gender: user[1], sexual_orientation: user[2], addition_info: user[3],
        describe_type: q1, stuck_out: q2, recognize: q3,
        swipe: swipe_dict, random_order: randOrd
    }
    addTrial(send);
    return true;
}

export { PostTrial };