import React from 'react';
import styled from 'styled-components';

const ChoiceContainer = styled.div`
   margin-top: 20px;
   font-size: 1.5em;
   color: #333;
`;

const Choice = ({ selectedSticker }) => (
   <ChoiceContainer>
      {selectedSticker ? `Selected: ${selectedSticker}` : 'Please select a sticker'}
   </ChoiceContainer>
);

export default Choice;