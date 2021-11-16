import styled from "styled-components";
import { Search } from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Mobil} from "../Responsive"


const Container = styled.div`
  height: 60px;
  ${Mobil({height: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobil({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Mobil({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  width: 150px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  ${Mobil({width: "70px",marginLeft:"10px"})}
`;

const Input = styled.input`
  border: none;
  width: 120px;
  height: 20px;
  ${Mobil({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${Mobil({fontSize: "24px"})}
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  ${Mobil({justifyContent :"center",flex:2})}
`;



const Menuitems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${Mobil({fontSize: "12px",marginLeft:"10px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{color:'gray',fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <Menuitems>REGISTER</Menuitems>
          <Menuitems>SIGN IN</Menuitems>
          <Menuitems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </Menuitems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
