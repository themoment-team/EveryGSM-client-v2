'use client';

interface LikeProps {
  isLiked: boolean;
  onClick: () => void;
}

const Like = ({ isLiked, onClick }: LikeProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M18.7903 4C22.2249 4 25 6.79316 25 10.25C25 11.5374 24.6144 12.7372 23.948 13.7294L23.9466 13.728C23.6582 14.1594 22.9211 15.0107 22.092 15.9378L14 24L5.90801 15.9378C5.07895 15.0107 4.34182 14.1594 4.05343 13.728L4.05204 13.7294C3.38565 12.7372 3 11.5374 3 10.25C3 6.79316 5.77514 4 9.20968 4C11.2206 4 12.8649 5.41278 14 6.72727C15.1351 5.41278 16.7794 4 18.7903 4Z"
      fill={isLiked ? '#FC335A' : 'none'}
      stroke={isLiked ? '#FC335A' : '#888888'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Like;
