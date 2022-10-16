import { useCallback, useEffect } from 'react';
import Position from '../models/Position';

const useMousePosition = ({selector, onClick, onMouseLeave, onMouseMove, lockPosition, precision = 1}: {
  selector: string,
  precision?: number,
  lockPosition?: boolean,
  onClick: (relativePosition: Position, isEmpty: boolean) => void,
  onMouseMove?: (relativePosition: Position) => void
  onMouseLeave?: (relativePosition: Position) => void
}) => {
  const roundToPrecision = (num: number, precision: number) => {
    if (precision <= 0) {
      return num;
    }
    return Math.round(num / precision) * precision;
  }

  const getRelativePosition = useCallback((event: any): Position => {
    const {x: elementX = 0, y: elementY = 0, height, width} = document.querySelector(selector)?.getBoundingClientRect() ?? {};
    const x = roundToPrecision(event.clientX - elementX, precision);
    const y = roundToPrecision(event.clientY - elementY, precision);
    const xPercent = roundToPrecision(x / (width ?? x) * 100, precision) / 100;
    const yPercent = roundToPrecision(y / (height ?? y) * 100, precision) / 100;
    return {
      x,
      y,
      xPercent,
      yPercent
    }
  }, [selector, precision]);

  const handleMouseMove = (event: any) => {
    const position = getRelativePosition(event);
    onMouseMove?.(position);
  };

  const handleClick = (event: any) => {
    const position = getRelativePosition(event);
    onClick(position, position.y >= 150);
  };

  const handleMouseLeave = (event: any) => {
    const position = getRelativePosition(event);
    onMouseLeave?.(position);
  }

  useEffect(() => {
    const slider = document.querySelector(selector);
    slider?.addEventListener('click', handleClick, true);
    slider?.addEventListener('mousemove', handleMouseMove, true);
    slider?.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      slider?.removeEventListener('click', handleClick);
      slider?.removeEventListener('mousemove', handleMouseMove);
      slider?.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);
}

export default useMousePosition;