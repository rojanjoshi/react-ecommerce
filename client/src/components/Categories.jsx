import styled from 'styled-components'
import { categories } from '../data'
import Categoryitem from './Categoryitem'
import {Mobil} from "../Responsive"


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-space-between;
${Mobil({padding: "0px",flexDirection:"column"})}
`
const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <Categoryitem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
