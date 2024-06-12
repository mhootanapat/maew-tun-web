/* eslint-disable @typescript-eslint/unbound-method */
import useVideoPlayer from '@/common/hooks/useVideoPlayer';
import { act, render, renderHook, waitFor } from '@testing-library/react';

describe('useVideoPlayer', () => {
  let playMock: jest.Mock;

  beforeEach(() => {
    playMock = jest.fn();
  });

  it('should set focus state correctly', () => {
    const { result } = renderHook(() => useVideoPlayer());

    act(() => {
      result.current.setFocus(true);
    });

    expect(result.current.setFocus).toBeDefined();
  });

  it('should play the video when focus is set to true', () => {
    const { result } = renderHook(() => useVideoPlayer());
    render(<video ref={result.current.vdoElementRef} />);
    result.current.vdoElementRef.current!.play = playMock;

    act(() => {
      result.current.setFocus(true);
    });

    expect(playMock).toHaveBeenCalled();
  });

  it('should not play the video when focus is set to false', () => {
    const { result } = renderHook(() => useVideoPlayer());
    render(<video ref={result.current.vdoElementRef} />);
    result.current.vdoElementRef.current!.play = playMock;

    act(() => {
      result.current.setFocus(false);
    });

    expect(playMock).not.toHaveBeenCalled();
  });

  it('should play the video when onEndedLoop is called and focus is true', () => {
    const { result } = renderHook(() => useVideoPlayer());
    render(<video ref={result.current.vdoElementRef} />);
    result.current.vdoElementRef.current!.play = playMock;

    act(() => {
      result.current.setFocus(true);
    });

    act(() => {
      result.current.onEndedLoop();
    });

    expect(playMock).toHaveBeenCalledTimes(2); // NOTE: Called once during focus and once onEndedLoop
  });

  it('should not play the video when onEndedLoop is called and focus is false', () => {
    const { result } = renderHook(() => useVideoPlayer());
    render(<video ref={result.current.vdoElementRef} />);
    result.current.vdoElementRef.current!.play = playMock;

    act(() => {
      result.current.setFocus(false);
    });

    act(() => {
      result.current.onEndedLoop();
    });

    expect(playMock).toHaveBeenCalledTimes(0);
  });

  it('should return vdoElementRef correctly for default', () => {
    const { result } = renderHook(() => useVideoPlayer());

    expect(result.current.vdoElementRef).toBeDefined();
    expect(result.current.vdoElementRef.current).toBe(null);
  });

  it('should return vdoElementRef correctly', () => {
    const { result } = renderHook(() => useVideoPlayer());
    const { container } = render(<video ref={result.current.vdoElementRef} id="test-ref" />);

    expect(result.current.vdoElementRef).toBeDefined();
    expect(result.current.vdoElementRef.current).toBeInstanceOf(HTMLVideoElement);
    expect(container.querySelector('#test-ref')).toBe(result.current.vdoElementRef.current);
  });

  it('should update state on loadeddata event', () => {
    const { result } = renderHook(() => useVideoPlayer());
    const { container } = render(<video ref={result.current.vdoElementRef} />);

    act(() => {
      container.dispatchEvent(new Event('loadeddata'));
    });

    waitFor(() => expect(result.current.loadedData).toBe(true));
  });

  it('should update state on canplaythrough event', () => {
    const { result } = renderHook(() => useVideoPlayer());
    const { container } = render(<video ref={result.current.vdoElementRef} />);

    act(() => {
      container.dispatchEvent(new Event('canplaythrough'));
    });

    waitFor(() => expect(result.current.canplaythrough).toBe(true));
  });

  it('should update state on playing event', () => {
    const { result } = renderHook(() => useVideoPlayer());
    const { container } = render(<video ref={result.current.vdoElementRef} />);

    act(() => {
      container.dispatchEvent(new Event('playing'));
    });

    waitFor(() => expect(result.current.playing).toBe(true));
    waitFor(() => expect(result.current.ended).toBe(false));
  });

  it('should update state on ended event', () => {
    const { result } = renderHook(() => useVideoPlayer());
    const { container } = render(<video ref={result.current.vdoElementRef} />);

    act(() => {
      container.dispatchEvent(new Event('ended'));
    });

    waitFor(() => expect(result.current.playing).toBe(false));
    waitFor(() => expect(result.current.ended).toBe(true));
  });

  it('should clean up event listeners on unmount', () => {
    const { result, unmount } = renderHook(() => useVideoPlayer());
    const { container } = render(<video ref={result.current.vdoElementRef} />);
    const removeEventListenerMock = jest.fn();

    Object.defineProperty(container, 'removeEventListener', {
      value: removeEventListenerMock,
    });

    unmount();

    waitFor(() => expect(removeEventListenerMock).toHaveBeenCalledWith('loadeddata', expect.any(Function)));
    waitFor(() => expect(removeEventListenerMock).toHaveBeenCalledWith('canplaythrough', expect.any(Function)));
    waitFor(() => expect(removeEventListenerMock).toHaveBeenCalledWith('playing', expect.any(Function)));
    waitFor(() => expect(removeEventListenerMock).toHaveBeenCalledWith('ended', expect.any(Function)));
  });
});
