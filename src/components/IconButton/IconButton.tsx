import {useCallback} from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

import './IconButton.css';

const IconButton = (props: IconButtonProps) => {
    const {className, icon, disabled, onClick} = props;

    const handleClick = useCallback(() => {
        onClick?.();
    }, [onClick]);

    return (
        <button className="IconButton" disabled={disabled} onClick={handleClick}>
            <FontAwesomeIcon className={className} icon={icon} />
        </button>
    );
};

interface IconButtonProps {
  className?: string;
  icon: FontAwesomeIconProps['icon'];
  disabled?: boolean;
  onClick?: () => void;
}

export default IconButton;