import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import './IconButton.css';

const IconButton = (props: IconButtonProps) => {
  const {icon} = props;

  return (
    <button className="IconButton">
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

interface IconButtonProps {
  icon: FontAwesomeIconProps['icon']
}

export default IconButton;