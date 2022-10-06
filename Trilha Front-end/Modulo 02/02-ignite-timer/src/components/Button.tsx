import { ButtonContainer } from './Button.styles'

interface ButtonProps{
	variant?: ButtonVariant;
}
export function Button() {
    <>
        <ButtonContainer>Enviar</ButtonContainer>
        <ButtonContainer>Enviar</ButtonContainer>
        <ButtonContainer>Enviar</ButtonContainer>
        <ButtonContainer>Enviar</ButtonContainer>
    </>
}