import styled from "styled-components";

export type ButtonVariant =  'primary' | 'secondary' | 'danger' | 'neutral'

interface ButtonContainerProps{
	variant?: ButtonVariant;
}

const buttonVariant = {
	primary: 'purple',
	secondary: 'orange',
	danger:  'red' ,
	neutral: 'green'
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
		heigh: 40px;

		${props => {
			return css `
				backgound-color: ${buttonVariant[props.variant]}
	`}}
`