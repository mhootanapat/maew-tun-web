import { useCallback, useEffect, useRef, useState } from 'react';

export default function useVideoPlayer() {
  const vdoElementRef = useRef<HTMLVideoElement>(null);
  const [focus, setFocus] = useState(false);

  const [loadedData, setLoadedData] = useState<boolean>(false);
  const [canplaythrough, setCanplaythrough] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean | null>(null);
  const [ended, setEnded] = useState<boolean | null>(null);

  const handleLoadedData = useCallback(() => {
    setLoadedData(true);
  }, []);

  const handleCanPlayThrough = useCallback(() => {
    setCanplaythrough(true);
  }, []);

  const handlePlaying = useCallback(() => {
    setPlaying(true);
    setEnded(false);
  }, []);

  const handleEnded = useCallback(() => {
    setPlaying(false);
    setEnded(true);
  }, []);

  useEffect(() => {
    const videoElement = vdoElementRef.current;

    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.addEventListener('playing', handlePlaying);
      videoElement.addEventListener('ended', handleEnded);

      // NOTE: Clean up event listeners on component unmount
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.removeEventListener('playing', handlePlaying);
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [handleCanPlayThrough, handleEnded, handleLoadedData, handlePlaying]);

  const loop = useCallback(() => {
    vdoElementRef.current?.play();
  }, []);

  const onEndedLoop = useCallback(() => {
    if (focus) loop(); // NOTE: when ended check if its focused then loop
  }, [focus, loop]);

  useEffect(() => {
    if (focus) loop(); // NOTE when focused then loop
  }, [focus, loop]);

  return { setFocus, onEndedLoop, vdoElementRef, loadedData, canplaythrough, playing, ended };
}
