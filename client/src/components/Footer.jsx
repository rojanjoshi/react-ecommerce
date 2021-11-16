
import { FaceOutlined, Instagram, MailOutlined, Phone, Pinterest, RoomOutlined, Twitter } from '@material-ui/icons'
import styled from'styled-components'
import { Mobil } from '../Responsive'
import PNG from '../images/pngwing6.png'

const Container = styled.div`
display:flex;
${Mobil({flexDirection: "column"})}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px 0px;
`
const Socialcontainer = styled.div`
display: flex;
`
const Socialicon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`

const Center = styled.div`
flex:1;
padding: 20px;
${Mobil({display: "none"})}
`
const Title = styled.h3`
margin-bottom: 30px;
`


const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const Listitem = styled.li`
width: 50%;
margin-bottom: 10px;
`
    



const Right = styled.div`
flex: 1;
padding: 20px;
${Mobil({backgroundColor: "#fff8f8"})}
`

const Contactitem = styled.div`
display:flex;
margin-bottom: 20px;
align-items: center;
`

const Payment = styled.img`
width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur harum quas ipsa minus neque id nostrum deserunt quia ducimus, praesentium blanditiis rem nihil quis autem voluptatem, quibusdam natus itaque.
            </Desc>
            <Socialcontainer>
                <Socialicon color="3B5999"><FaceOutlined/></Socialicon>
                <Socialicon color="E4405F"><Instagram/></Socialicon>
                <Socialicon color="55ACEE"><Twitter/></Socialicon>
                <Socialicon color="E60023"><Pinterest/></Socialicon>
            </Socialcontainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Listitem>Home</Listitem>
                    <Listitem>Cart</Listitem>
                    <Listitem>Man Fashion</Listitem>
                    <Listitem>Woman Fashion</Listitem>
                    <Listitem>Accessories</Listitem>
                    <Listitem>My Account</Listitem>
                    <Listitem>Order Tracking</Listitem>
                    <Listitem>Wishlist</Listitem>
                    <Listitem>Wishlist</Listitem>
                    <Listitem>Terms & condition</Listitem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                
                <Contactitem><RoomOutlined style={{marginRight:"10px"}}/>662 Dixie Path, South Tobinchester 98336</Contactitem>
                <Contactitem><Phone style={{marginRight:"10px"}} />+1 234 56 78</Contactitem>
                <Contactitem><MailOutlined style={{marginRight:"10px"}}/>contact@lama.dev</Contactitem>
            <Payment src={PNG}/>
            </Right>
        </Container>
    )
}

export default Footer
