import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import './IconButton.css';

const IconButton = (props: IconButtonProps) => {
  const {className, icon, onClick} = props;

  return (
    <button className="IconButton" onClick={() => {onClick?.()}}>
      <FontAwesomeIcon className={className} icon={icon} />
    </button>
  );
}

interface IconButtonProps {
  className?: string;
  icon: FontAwesomeIconProps['icon'];
  onClick?: () => void;
}

export default IconButton;