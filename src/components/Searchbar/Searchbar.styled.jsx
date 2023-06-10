import styled from 'styled-components';

export const Search = styled.header`
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  cursor: pointer;
  outline: none;
`;

export const Span = styled.span`
  width: 1px;
  height: 1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  padding-left: 4px;
  padding-right: 4px;
  display: inline-block;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
