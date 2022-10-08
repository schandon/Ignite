import styled, { css } from "styled-components";

export type ButtonVariant =  'primary' | 'secondary' | 'danger' | 'neutral'

interface ButtonContainerProps{
	variant: ButtonVariant;
}

const buttonVariants = {
	primary: 'purple',
	secondary: 'orange',
	danger: 'red',
	neutral: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	margin: 8px;

	background: ${props => props.theme.primary};
	color: ${props=>props.theme.white};
/* 
	${props => {
	return css`
		background-color: ${buttonVariants[props.variant]}`
	}} */
`