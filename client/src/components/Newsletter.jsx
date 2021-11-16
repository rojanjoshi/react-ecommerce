import { SendOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {Mobil} from "../Responsive" 

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${Mobil({textAlign: "center"})}
`
const Inputcontainer = styled.div`
width:50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${Mobil({width: "80%"})}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex:1;
border:none;
background-color: teal;
color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products</Desc>
            <Inputcontainer>
            <Input placeholder="Your email"/>
            <Button>
                <SendOutlined />
            </Button>
            </Inputcontainer>

        </Container>
    )
}

export default Newsletter
