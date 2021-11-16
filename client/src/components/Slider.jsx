import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { slideritems } from "../data";
import { useState } from "react";
import {Mobil} from "../Responsive"


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobil({display: "none"})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props=>props.slideindex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props=>props.bg};
`;
const Imagecontainer = styled.div`
  height: 100%;
  margin-left: 200px;
  flex: 1;
`;
const Infocontainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-right: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 20px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Image = styled.img`
height: 80%;
`;

const Slider = () => {
    const [slideindex, setslideindex] = useState(0)
    const handleclick = (direction) =>{
        if(direction==="left"){
            setslideindex(slideindex > 0 ? slideindex-1:2)
        }else{
            setslideindex(slideindex < 2 ? slideindex +1 :0)
        }
    }
    
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleclick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideindex={slideindex}>
          {slideritems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
          <Imagecontainer>
            <Image src={item.img} key={item.id} />
          </Imagecontainer>
          <Infocontainer>
            <Title>{item.title} </Title>
            <Desc>{item.desc} key={item.id}</Desc>
            <Button>SHOP NOW</Button>
          </Infocontainer>
        </Slide>
          ))}
        
{/* 
        <Slide bg="#fcf1ed">
          <Imagecontainer>
            <Image src={require("../images/pngwing1.png").default} />
          </Imagecontainer>
          <Infocontainer>
            <Title>WINTER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </Infocontainer>
        </Slide>

        <Slide bg="#fbf0f4">
          <Imagecontainer>
            <Image src={require("../images/pngwing2.png").default} />
          </Imagecontainer>
          <Infocontainer>
            <Title>POPULAR</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </Infocontainer>
        </Slide> */}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleclick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
