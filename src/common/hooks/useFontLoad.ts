import { useEffect, useState } from 'react';

export default function useFontLoad() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });

      const handleFontLoad = () => {
        setFontsLoaded(true);
      };

      document.fonts.addEventListener('loadingdone', handleFontLoad);

      return () => {
        document.fonts.removeEventListener('loadingdone', handleFontLoad);
      };
    } else {
      setFontsLoaded(true);
    }
  }, []);

  return { fontsLoaded };
}
