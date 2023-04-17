import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './App.css';
import { Pics } from './Pics.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  const [valid, setV] = useState(false);//need valid true to start

  const [userName, setName] = useState('');
  const [userGender, HRT] = useState('');
  const [userSexOrt, pride] = useState('');
  const [extraInfo, addInfo] = useState('');

  function checkVal() {
    if (userName == '' || userGender == '' || userSexOrt == '')
      return false;
    else {
      return true;
    }
  }
  if (!valid) {
    return (
      <>
        <span id="content1"></span>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <span id="content1"></span>
            <input name="myInput" onChange={e => { setName(e.target.value); }} />
          </Form.Group>
        </Form>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              Gender
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-2" onClick={() => HRT('Female')}
              >Female</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => HRT('Male')}
              >Male</Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={() => HRT('Gender queer/ gender nonconforming')}
              >Gender queer/ gender nonconforming</Dropdown.Item>
              <Dropdown.Item href="#/action-5" onClick={() => HRT('Questioning')}
              >Questioning</Dropdown.Item>
              <Dropdown.Item href="#/action-6" onClick={() => HRT('Prefer not to say')}
              >Prefer not to say </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
          <span id="content1"></span>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              Sexual Preference
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-2" onClick={() => pride('Heterosexual (female)')}
              >Heterosexual (female)</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => pride('Heterosexual (male)')}
              >Heterosexual (male)</Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={() => pride('Homosexual (female)')}
              >Homosexual (female)</Dropdown.Item>
              <Dropdown.Item href="#/action-5" onClick={() => pride('Homosexual (male)')}
              >Homosexual (male)</Dropdown.Item>
              <Dropdown.Item href="#/action-6" onClick={() => pride('Bisexual/pansexual')}
              >Bisexual/pansexual </Dropdown.Item>
              <Dropdown.Item href="#/action-7" onClick={() => pride('Asexual/other')}
              >Asexual/other</Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <span id="content1"></span>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Any additional information you would like us to know?</Form.Label>
            <span id="content1"></span>
            <input name="myInput" onChange={e => { addInfo(e.target.value); }} />
          </Form.Group>
        </Form>
        <Button size="lg" onClick={() => { setV(checkVal()) }}>Start Trial</Button>
        <span id="content1"></span>
        <a href="https://github.com/sergiss/react-clock" target="_blank"><i className="fa">&#xf09b;</i> Clock Template Source Code </a>
        <a href="https://github.com/abril-AL/Crux" target="_blank"><i className="fa">&#xf09b;</i> Crux Source Code </a>
      </>
    );
  }
  else {
    const user = [userName, userGender, userSexOrt, extraInfo];
    return (
      <Pics user={user}></Pics>
    );
  }

}


export default App;
