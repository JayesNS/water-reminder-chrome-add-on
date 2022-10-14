import { useRef } from 'react';
import Position from '../models/Position';
import useMousePosition from './useMousePosition';

const useFillOnMouseMove = ({
  selector, fillSelector, lockPosition = false, precision, onClick
}: {
  selector: string,
  fillSelector: string,
  precision: number,
  lockPosition?: boolean,
  onClick?: (position: Position) => void
}) => {
  const position = useRef<Position>({
    x: 0,
    y: 0
  });

  useMousePosition({
    selector,
    precision,
    onClick(relativePosition) {
      position.current = relativePosition;
      onClick?.(relativePosition);
    },
    onMouseLeave() {
      setElementPosition(position.current)
    },
    onMouseMove(relativePosition) {
      if (!lockPosition || (lockPosition && relativePosition.y > position.current.y)) {
        setElementPosition(relativePosition);
      }
    }
  })

  const setElementPosition = (position: Position) => {
    const fillElement: HTMLElement | null = document.querySelector(fillSelector);
    if (fillElement?.style) {
      fillElement.style.top = `${position.y}px`;
    }
  }
};

export default useFillOnMouseMove;