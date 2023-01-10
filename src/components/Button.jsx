import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border: none;
  border-radius: var(--radii);

  display: flex;
  align-items: center;
  gap: 0.75rem;

  cursor: pointer;
`;
