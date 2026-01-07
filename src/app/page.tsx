import { HomePage } from '@/views/home';
import { ProfileCard } from '@/widgets/profilecard';

const Home = () => {
  return (
    <div className="flex justify-center bg-[#191919]">
      <ProfileCard />
      <HomePage />
    </div>
  );
};

export default Home;
