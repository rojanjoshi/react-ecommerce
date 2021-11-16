import styled from 'styled-components'
import {Mobil} from "../Responsive"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${Mobil({height: "25vh"})}
`

const Info = styled.div`
position:absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`

const Button = styled.button`
border: none;
background-color: white;
color: gray;
cursor: pointer;
padding: 10px;
font-weight: 300;
`
const Categoryitem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default Categoryitem
