import React from "react"
import styled from "@emotion/styled"
import { Layout, ContentWrapper } from "../layouts"
import ContactForm from "../components/ContactForm"

const contactPage = props => {
  console.log(props.location)
  return (
    <Layout>
      <ContactForm location={props.location.pathname} />
    </Layout>
  )
}

export default contactPage
