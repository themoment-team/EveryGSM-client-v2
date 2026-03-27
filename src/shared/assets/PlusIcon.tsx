interface PlusIconProps {
  isLarge?: boolean;
  className?: string;
}

const PlusIcon = ({ isLarge = false, className }: PlusIconProps) => {
  if (isLarge) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className={className}
      >
        <path
          d="M23.7529 0C24.8575 0 25.7529 0.895431 25.7529 2V21.2588H46C47.1046 21.2588 48 22.1542 48 23.2588C47.9998 24.3632 47.1045 25.2588 46 25.2588H25.7529V46C25.7529 47.1046 24.8575 48 23.7529 48C22.6484 48 21.7529 47.1046 21.7529 46V25.2588H2C0.895551 25.2588 0.000195828 24.3632 0 23.2588C0 22.1542 0.895431 21.2588 2 21.2588H21.7529V2C21.7529 0.895431 22.6484 0 23.7529 0Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M7.9248 0C8.47709 0 8.9248 0.447715 8.9248 1V6.7666H15.0049C15.5571 6.7666 16.0048 7.21436 16.0049 7.7666C16.0049 8.31889 15.5572 8.7666 15.0049 8.7666H8.9248V15.0049C8.92437 15.5568 8.47682 16.0049 7.9248 16.0049C7.37288 16.0048 6.92524 15.5567 6.9248 15.0049V8.7666H1C0.44809 8.76616 0 8.31861 0 7.7666C4.63732e-05 7.21463 0.448118 6.76704 1 6.7666H6.9248V1C6.9248 0.447779 7.37261 0.000102858 7.9248 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlusIcon;
