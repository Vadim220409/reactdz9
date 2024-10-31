import React from 'react';
import styled from 'styled-components';
import Sticker from '../Sticker/Sticker';
import stickers from '../../services/stickers.json';

const StickerListContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const StickerList = ({ onStickerClick }) => (
   <StickerListContainer>
      {stickers.map((sticker) => (
         <Sticker
            key={sticker.label}
            img={sticker.img}
            label={sticker.label}
            onClick={onStickerClick}
         />
      ))}
   </StickerListContainer>
);

export default StickerList;