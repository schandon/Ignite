import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  margin: 8px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
