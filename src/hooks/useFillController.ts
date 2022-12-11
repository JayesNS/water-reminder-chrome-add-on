import { useCallback, useRef, useLayoutEffect, useEffect, MutableRefObject } from 'react';
import Position from '../models/Position';
import MathUtils from '../utils/MathUtils';

const getRelativePosition = (parent: Element, precision = 5) => (event: MouseEvent): Position => {
    const {x: elementX = 0, y: elementY = 0, height, width} = parent.getBoundingClientRect() ?? {};
    const x = MathUtils.toFixed(event.clientX - elementX, 0);
    const y = MathUtils.toFixed(event.clientY - elementY, 0);
    const xPercent = MathUtils.toFixed((x / (width ?? x) * 100) / 100, precision);
    const yPercent = MathUtils.toFixed((y / (height ?? y) * 100) / 100, precision)
    return {
      x,
      y,
      xPercent,
      yPercent
    }
  };

const useFillController = ({
    fillContainer,
    mouseContainer,
    precision = 5,
    bothDirections = true,
    onChange,
    value
}: FillControllerOptions) => {
    const originalFillValue = useRef<FillValue>();
    const fillValue = useRef<FillValue>()

    useLayoutEffect(() => {
        const initialFillValue: FillValue = {
            height: Number(fillContainer.current.getAttribute('height')),
            y: Number(fillContainer.current.getAttribute('y'))
        };
        originalFillValue.current = initialFillValue;
        fillValue.current = initialFillValue;
    }, [fillContainer]);

    useEffect(() => {
        fillValue.current = getFillValueFromPercent(value);
        updateFill(fillValue.current);
    }, [value]);

    const handleClick = useCallback((event: MouseEvent) => {
        const position = getRelativePosition(mouseContainer.current, 2)(event);
        const newFillValue = getFillValueFromPercent(1 - (position.yPercent ?? 0), precision);
        if (isEventCancelled(newFillValue.height)) {
            return;
        }
        fillValue.current = newFillValue;
        onChange?.(roundPrecent(1 - (position.yPercent ?? 0)));
    }, [onChange]);

    useEffect(() => {
        if (!mouseContainer.current) {
          return;
        }
        mouseContainer.current.addEventListener('click', handleClick);
        mouseContainer.current.addEventListener('mousemove', handleMouseMove);
        mouseContainer.current.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            mouseContainer.current?.removeEventListener('click', handleClick);
            mouseContainer.current?.removeEventListener('mousemove', handleMouseMove);
            mouseContainer.current?.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [handleClick]);

    const isEventCancelled = (height: number) => (
        !bothDirections
        && fillValue.current
        && height >= fillValue.current.height
    );

    const getFillValueFromPercent = (percent: number, precision = 1): FillValue => {
        const {
            y: originalY = 0,
            height: originalHeight = 0
        } = originalFillValue.current ?? {};
        const newHeight = MathUtils.roundToPrecision(originalHeight * percent, precision)
        const newY = originalY + originalHeight - newHeight;
        return {
            y: newY,
            height: newHeight
        };
    };

    const updateFill = (fillValue: FillValue) => {
        fillContainer.current?.setAttribute('height', fillValue.height.toString());
        fillContainer.current?.setAttribute('y', fillValue.y.toString());
    };

    const handleMouseMove = (event: MouseEvent) => {
        const position = getRelativePosition(mouseContainer.current)(event);
        const newFillValue = getFillValueFromPercent(1 - (position.yPercent ?? 0), precision);
        if (isEventCancelled(newFillValue.height)) {
            return;
        }
        updateFill(newFillValue);
    };

    const roundPrecent = (percent: number) => (
        MathUtils.toFixed(MathUtils.roundToPrecision(percent * 100, precision) / 100, 2)
    );

    const handleMouseLeave = () => {
        fillValue.current && updateFill(fillValue.current);
    };

    const reset = (delay = 0) => {
        setTimeout(() => {
            fillValue.current = originalFillValue.current;
            fillValue.current && updateFill(fillValue.current);
        }, delay);
    }

    return {
        reset
    };
};

interface FillControllerOptions {
    fillContainer: MutableRefObject<SVGElement>;
    mouseContainer: MutableRefObject<SVGElement>;
    precision?: number;
    bothDirections?: boolean;
    value: number;
    onChange?: (percentFill: number) => void;
}

interface FillValue {
    height: number;
    y: number;
}

export default useFillController;
