import SCROLL_DIRECTION from '@/common/enums/scrollDirection';
import { IScrollDirectionHook } from '@/common/types/common/hooks/useScrollDirection';
import { useEffect, useState } from 'react';

const offsetScrolling = 2;

export default function useScrollDirection(props: IScrollDirectionHook = {}) {
  const { triggerPosition = 1, bottomPositionOffset = 40 } = props;
  const [scrollDirection, setScrollDirection] = useState<SCROLL_DIRECTION | null>(null);
  const [isTriggered, setTriggered] = useState<boolean>(false);
  const [isBottomOfPage, setIsBottomOfPage] = useState<boolean>(false);

  const scrollClassName = [
    scrollDirection === SCROLL_DIRECTION.DOWN ? 'hide' : '',
    isTriggered ? 'triggered' : '',
    isBottomOfPage ? 'bottom-position' : '',
  ]
    .filter((v) => v)
    .join(' ');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? SCROLL_DIRECTION.DOWN : SCROLL_DIRECTION.UP;
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > offsetScrolling || scrollY - lastScrollY < -offsetScrolling)
      ) {
        setScrollDirection(direction);
      }
      const triggered = scrollY > triggerPosition;
      lastScrollY = triggered ? scrollY : 0;
      setTriggered(triggered);

      const scrollHeight = document.body.scrollHeight;
      const innerHeight = window.innerHeight;

      setIsBottomOfPage(scrollY + innerHeight > scrollHeight - bottomPositionOffset);
    };

    window.addEventListener('scroll', updateScrollDirection); // add event listener

    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection, triggerPosition, bottomPositionOffset]);

  return {
    scrollDirection,
    isTriggered,
    scrollClassName,
  };
}
