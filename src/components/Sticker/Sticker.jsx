import React from 'react';
import styled from 'styled-components';

const StyledSticker = styled.div`
   cursor: pointer;
   text-align: center;
   margin: 10px;
   img {
      width: 100px;
      height: 100px;
   }
`;

const Sticker = ({ img, label, onClick }) => (
   <StyledSticker onClick={() => onClick(label)}>
      <img src={img} alt={label} />
      <p>{label}</p>
   </StyledSticker>
);

export default Sticker;