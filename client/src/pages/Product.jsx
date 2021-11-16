import Women from '../images/pngwing7.jpg'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@material-ui/icons'
import {Mobil} from "../Responsive"


const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${Mobil({padding: "10px",flexDirection:"column"})}

`
const Imgcontainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${Mobil({height: "40vh"})}
`
const Infocontainer = styled.div`
flex:1;
padding: 0px 50px;
${Mobil({padding: "10px"})}
`
const Title = styled.h1`
font-weight: 200;`

const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.div`
font-size: 40px;
font-weight: 100;
`
const Filtercontainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0;
${Mobil({width: "100%"})}
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const Filtertitle = styled.h1`
font-size: 20px;
font-weight: 200;`

const Filtercolor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`
const Filtersize = styled.select`
margin-left: 10px;
padding: 5px;`

const Filtersizeoption = styled.option``

const Addcontainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
${Mobil({width: "100%"})}
`

const Amountcontainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;


`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Imgcontainer>
                <Image src={Women}/>
                </Imgcontainer>
                <Infocontainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint. Nulla nostrum assumenda velit neque architecto placeat exercitationem expedita reiciendis commodi vero, laborum dicta perferendis laudantium maiores, cum quo vel?</Desc>
                    <Price>$ 20</Price>

                    <Filtercontainer>
                        <Filter>
                            <Filtertitle>Color</Filtertitle>
                            <Filtercolor color="black"/>
                            <Filtercolor color="darkblue"/>
                            <Filtercolor color="gray"/>
                        </Filter>
                        <Filter>
                            <Filtertitle>Size</Filtertitle>
                            <Filtersize>
                                <Filtersizeoption>XS</Filtersizeoption>
                                <Filtersizeoption>S</Filtersizeoption>
                                <Filtersizeoption>M</Filtersizeoption>
                                <Filtersizeoption>L</Filtersizeoption>
                                <Filtersizeoption>XL</Filtersizeoption>
                                <Filtersizeoption>XXL</Filtersizeoption>
                            </Filtersize>
                        </Filter>
                    </Filtercontainer>
                <Addcontainer>
                    <Amountcontainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                        
                    </Amountcontainer>
                    <Button>ADD TO CART</Button>
                </Addcontainer>
                </Infocontainer>
               
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
