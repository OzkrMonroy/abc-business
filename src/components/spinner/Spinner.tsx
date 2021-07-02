import { HalfSpinner, CircleOne, CircleTwo } from './spinnerStyles';

interface SpinnerProps {
  size: string;
  color: '#001557' | '#FFFFFF'
}

export const Spinner = ({ size, color='#FFFFFF' }: SpinnerProps) => {
  return (
    <HalfSpinner spinnerColor={color} spinnerSize={size}>
      <CircleOne spinnerColor={color} spinnerSize={size}></CircleOne>
      <CircleTwo spinnerColor={color} spinnerSize={size}></CircleTwo>
    </HalfSpinner>
  )
}
