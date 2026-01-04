interface ArrowIconProps {
  isLarge?: boolean;
  color?: string;
}

const ArrowIcon = ({ isLarge = false, color = 'white' }: ArrowIconProps) =>
  isLarge === false ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path
        d="M1 1L5 5L1 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
      <path
        d="M1.5 1.5L9.5 9.5L1.5 17.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

export default ArrowIcon;
