import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {Mobil} from "../Responsive"

const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const Filtercontainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${Mobil({margin: "0px 20px", display:"flex",flexDirection:"column"})}
`

const Filtertext = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${Mobil({marginRight: "0px"})}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${Mobil({margin: "10px 0px"})}
`
const Option = styled.option``

const Productlist = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <Filtercontainer>
                <Filter>
                    <Filtertext>Filter Products</Filtertext>
                    <Select>
                    <Option disabled selected >Color</Option>
                    <Option  >White</Option>
                    <Option >Black</Option>
                    <Option  >Red</Option>
                    <Option  >Blue</Option>
                    <Option >Yellow</Option>
                    <Option >Green</Option>
                    </Select>
                    <Select>
                    <Option disabled selected >Size</Option>
                    <Option  >XS</Option>
                    <Option >S</Option>
                    <Option  >M</Option>
                    <Option  >L</Option>
                    <Option >XL</Option>
                    <Option >XXL</Option>
                    </Select>
                    </Filter>
                <Filter><Filtertext>Sort Products</Filtertext>
                <Select>
                    <Option  selected >Newest</Option>
                    <Option  >Lowest Price</Option>
                    <Option >High Price</Option>
                  
                    </Select>
                </Filter>
               
            

            </Filtercontainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Productlist
