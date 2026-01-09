'use client';

interface LikeProps {
  isLiked: boolean;
  onClick: () => void;
}

const Like = ({ isLiked, onClick }: LikeProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="22"
    viewBox="0 0 24 22"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M16.7903 1C20.2249 1 23 3.79316 23 7.25C23 8.53743 22.6144 9.73724 21.948 10.7294L21.9466 10.728C21.6582 11.1594 20.9211 12.0107 20.092 12.9378L12 21L3.90801 12.9378C3.07895 12.0107 2.34182 11.1594 2.05343 10.728L2.05204 10.7294C1.38565 9.73724 1 8.53743 1 7.25C1 3.79316 3.77514 1 7.20968 1C9.22064 1 10.8649 2.41278 12 3.72727C13.1351 2.41278 14.7794 1 16.7903 1Z"
      fill={isLiked ? '#FC335A' : 'none'}
      stroke={isLiked ? 'none' : '#888888'}
      strokeWidth="2"
    />
  </svg>
);

export default Like;
