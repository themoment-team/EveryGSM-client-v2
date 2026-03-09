import { getMy } from '@/entities/project/index.server';
import { MyPage } from '@/views/mypage';

const Mypage = async () => {
  const initialMyData = await getMy();

  return <MyPage initialMyData={initialMyData} />;
};

export default Mypage;
