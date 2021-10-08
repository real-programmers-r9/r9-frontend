import { Button } from '@material-ui/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => router.push('/home')}>
        나 여기서 알바구했다, 알구
      </Button>
    </div>
  );
};

export default Home;
