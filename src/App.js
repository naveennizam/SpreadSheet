/* eslint-disable */
import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react';
import Countries from './Countries';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = [{
      Name: '',
      Email: '',
      Country: '',
      Phone_Num: ''
    }]

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = async (e) => {
    e.preventDefault();
    let selectElement = document.querySelector('#country');
    let output = selectElement.value;
    this.state.Country = output;


    let a = await fetch(`https://sheet.best/api/sheets/191ee1cf-7882-4067-a252-71280d361633`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    let b = await a.json()
    console.log(b);
    window.location.reload(false);
  }

  render() {
    const { Name, Email, Country, Phone_Num } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" required name="Name" value={Name} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>email</label>
            <input placeholder='Enter your email' type="email" required name="Email" value={Email} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>country</label>
           
            <Countries name="Country" value={Country} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>phone</label>
            <input placeholder='9999999' type="number" required name="Phone_Num" value={Phone_Num} onChange={this.changeHandler} />
          </Form.Field>

          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
/* eslint-disable */

