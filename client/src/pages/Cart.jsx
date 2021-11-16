import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Imag from "../images/pngwing1.png"
import { Add, Remove } from "@material-ui/icons";
import {Mobil} from "../Responsive"



const Container = styled.div``;


const Wrapper = styled.div`
  padding: 20px;
  ${Mobil({padding: "10px"})}
`;


const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Topbutton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Toptexts = styled.div`
${Mobil({display: "none"})}
`;

const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobil({flexDirection: "column"})}
`;


const Info = styled.div`
  flex: 3;
`;


const Product = styled.div`
display: flex;
justify-content: space-between;
${Mobil({flexDirection: "column"})}
`;

const Productdetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
height: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const Productname = styled.span`
  
`;

const Productid = styled.span``;

const Productcolor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;

const Productsize = styled.span``;

const Pricedetail = styled.span`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Productamountcontainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Productamount = styled.div`
font-size: 24px;
margin: 5px;
${Mobil({margin: "5px 15px"})}
`
const Productprice = styled.div`
font-size: 30px;
font-weight: 200;
${Mobil({marginBottom: "20px"})}
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
height: 50vh;
`;

const Summarytitle =styled.h1`
font-weight: 200;
`

const Summaryitem =styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`

const Summaryitemtext =styled.span`

`

const Summaryitemprice =styled.span`

`

const Button =styled.button`
width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Topbutton>CONTINUE SHOPPING</Topbutton>
          <Toptexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlist(0)</Toptext>
          </Toptexts>
          <Topbutton type="filled">CHECKOUT NOW</Topbutton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <Productdetail>
                <Image src={Imag}/>
                <Details>
                  <Productname>
                    <b>Product:   </b>JESSIE THUNDER SHOES
                  </Productname>
                  <Productid>
                    <b>ID:   </b>987654321
                  </Productid>
                  <Productcolor color="black"/>
                  <Productsize>
                    <b>Size:    </b>M
                  </Productsize>
                </Details>
              </Productdetail>
              <Pricedetail>
                <Productamountcontainer>
                  <Add/>
                  <Productamount>2</Productamount>
                  <Remove/>
                </Productamountcontainer>
                <Productprice>$ 2</Productprice>
              </Pricedetail>
            </Product>

            <Hr/>

            <Product>
              <Productdetail>
                <Image src={Imag}/>
                <Details>
                  <Productname>
                    <b>Product:   </b>JESSIE THUNDER SHOES
                  </Productname>
                  <Productid>
                    <b>ID:   </b>987654321
                  </Productid>
                  <Productcolor color="black"/>
                  <Productsize>
                    <b>Size:    </b>M
                  </Productsize>
                </Details>
              </Productdetail>
              <Pricedetail>
                <Productamountcontainer>
                  <Add/>
                  <Productamount>2</Productamount>
                  <Remove/>
                </Productamountcontainer>
                <Productprice>$ 2</Productprice>
              </Pricedetail>
            </Product>
          </Info>
        
          <Summary>
            <Summarytitle>ORDER SUMMARY</Summarytitle>
            <Summaryitem>
              <Summaryitemtext>Subtotal</Summaryitemtext>
              <Summaryitemprice>$ 80</Summaryitemprice>
            </Summaryitem>
            <Summaryitem>
              <Summaryitemtext>Estimated Shipping</Summaryitemtext>
              <Summaryitemprice>$ 5.90</Summaryitemprice>
            </Summaryitem>
            <Summaryitem>
              <Summaryitemtext>Discount</Summaryitemtext>
              <Summaryitemprice>$ -6</Summaryitemprice>
            </Summaryitem>
            <Summaryitem type="total">
              <Summaryitemtext >Total</Summaryitemtext>
              <Summaryitemprice>$ 75</Summaryitemprice>
            </Summaryitem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>

        

       
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
