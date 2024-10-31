import React, { useState } from 'react';
import StickerList from './components/StickerList/StickerList';
import Choice from './components/Choice/Choice';

const App = () => {
   const [selectedSticker, setSelectedSticker] = useState(null);

   const handleStickerClick = (label) => {
      setSelectedSticker(label);
   };

   return (
      <div>
         <h1>Choose Your Sticker</h1>
         <StickerList onStickerClick={handleStickerClick} />
         <Choice selectedSticker={selectedSticker} />
      </div>
   );
};

export default App;