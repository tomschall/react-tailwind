import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

export const IconButton: React.FC<IButtonProps> = ({
  label,
  handleClick,
  children,
}) => {
  return (
    <ButtonStyles onClick={handleClick}>
      {children}
      {label}
    </ButtonStyles>
  );
};

/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw`
  text-skin-light
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  bg-slate-500
  flex
  flex-col-reverse
  justify-center
  place-items-center
  [text-indent: -10000px]
  w-48
  h-48
  rounded-full
  border-hidden
  outline-none
  hover:(bg-slate-700 outline-offset-0 outline-slate-100)
  focus:(outline-offset-0 outline-slate-200)
  disabled:bg-slate-300
`;

const buttonHover = tw`
  hover:(outline-3)
`;

const buttonFocus = tw`
  focus:(outline-4)
`;

const ButtonStyles = styled.button((undefinded) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
]);
