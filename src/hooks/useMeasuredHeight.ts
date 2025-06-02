import { useState, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';

export default function useMeasuredHeight() {
  const [height, setHeight] = useState(0);

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const newHeight = e.nativeEvent.layout.height;
      if (newHeight !== height) {
        setHeight(newHeight);
      }
    },
    [height],
  );

  return { height, onLayout };
}
