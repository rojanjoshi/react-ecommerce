import styled from 'styled-components'
import Back from '../images/pngwing8.jpg'
import {Mobil} from "../Responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
 ),
 url('${Back}') no-repeat center center fixed;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${Mobil({width: "75%"})}
`

const Form = styled.form`
display:flex;
flex-direction: column;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`



const Button = styled.button`
width: 40%;
border: none;
padding:15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`

const Link = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
    return (
        <Container>
             <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
           
               
                    <Button>LOGIN</Button>
                    <Link>Forgot password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
