import { useCallback, useEffect, useRef, useState } from 'react';

export default function useVideoPlayer() {
  const vdoElementRef = useRef<HTMLVideoElement>(null);
  const [focus, setFocus] = useState(false);

  const loop = useCallback(() => {
    vdoElementRef.current?.play();
  }, []);

  const onEndedLoop = useCallback(() => {
    if (focus) loop(); // NOTE: when ended check if its focused then loop
  }, [focus, loop]);

  useEffect(() => {
    if (focus) loop(); // NOTE when focused then loop
  }, [focus, loop]);

  return { setFocus, onEndedLoop, vdoElementRef };
}
