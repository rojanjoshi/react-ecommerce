import {css} from "styled-components"

export const Mobil = (props) =>{
    return css`
    @media only screen and (max-width: 380px) {

        ${props}
    }
    `
}