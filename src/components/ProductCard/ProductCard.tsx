import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import React, { useState } from 'react'

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleButtonClick = () => {
    setIsInCart(!isInCart);
  }

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleButtonClick}>
        <p>{(isInCart)? '✓' : '+'}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
