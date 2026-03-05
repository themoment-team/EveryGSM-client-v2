import type { ComponentPropsWithoutRef } from 'react';

type IconProps = ComponentPropsWithoutRef<'svg'>;

const PersonIcon = (props: IconProps) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.7529 0C24.8575 0 25.7529 0.895431 25.7529 2V21.2588H46C47.1046 21.2588 48 22.1542 48 23.2588C47.9998 24.3632 47.1045 25.2588 46 25.2588H25.7529V46C25.7529 47.1046 24.8575 48 23.7529 48C22.6484 48 21.7529 47.1046 21.7529 46V25.2588H2C0.895551 25.2588 0.000195828 24.3632 0 23.2588C0 22.1542 0.895431 21.2588 2 21.2588H21.7529V2C21.7529 0.895431 22.6484 0 23.7529 0Z"
      fill="currentColor"
    />
  </svg>
);

export default PersonIcon;
