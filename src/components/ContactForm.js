import React, { useState } from "react"
import styled from "@emotion/styled"
import RedButton from "./RedButton"

const FormContainer = styled.form`
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.5rem;

  &:focus-within {
    background: ${props => props.theme.colors.primary.light};
  }

  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    &:focus-within {
      padding: 1.5rem;
    }
  }
`
const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media all and (min-width: 996px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const InputLabel = styled.label`
  font-weight: 700;
  padding-left: 0.25rem;
  margin-bottom: 0.25rem;
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-right: 1rem;
    margin-bottom: 0;
    padding: 0;
    flex: 1;
    text-align: right;

    + * {
      width: 75%;
    }
  }
`
const FormInput = styled.input`
  background: white;
  border: none;
  padding: 0.5rem;
  line-height: 1.25rem;
  outline: none;
  transition: all 0.3s ease;

  &:placeholder-shown {
    font-size: 0.675rem;
  }

  &:-ms-input-placeholder {
    margin: 0;
    font-size: 0.675rem;
  }

  &:focus {
    outline-color: ${props => props.theme.colors.secondary.light};
    outline-style: auto;
    outline-width: thin;
    transform: scale(1.01);
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.7);
    border-bottom: 2px solid ${props => props.theme.colors.secondary.light};
  }
`
const FormTextArea = FormInput.withComponent("textarea")

const ContactForm = props => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [locationState, setLocationState] = useState("")
  const [message, setMessage] = useState("")
  return (
    <FormContainer
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="sent-from" value={props.location} />
      <label style={{ display: `none` }}>
        Don't fill this out if you're human: <input name="bot-field" />
      </label>
      <FormGroup>
        <InputLabel htmlFor="fullName">Full Name</InputLabel>
        <FormInput
          type="text"
          name="fullName"
          placeholder="Enter your full name."
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="email">Email</InputLabel>
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email address."
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <FormInput
          type="tel"
          name="phone"
          placeholder="Enter your phone number."
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="city">City</InputLabel>
        <FormInput
          type="text"
          name="city"
          placeholder="Enter your city location."
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="locationState">State</InputLabel>
        <FormInput
          type="text"
          name="locationState"
          placeholder="Which state are you contacting us from?."
          value={locationState}
          onChange={e => setLocationState(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="message">Message</InputLabel>
        <FormTextArea
          type="text"
          name="message"
          placeholder="Enter your full name."
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows="8"
          required
        />
      </FormGroup>
      <RedButton buttonText="Submit" type="submit" />
    </FormContainer>
  )
}

export default ContactForm
