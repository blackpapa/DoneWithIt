import React, { useEffect, useState } from "react";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleAddImage = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemoveImage = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}
