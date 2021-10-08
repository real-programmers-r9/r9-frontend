import { Button } from '@material-ui/core';
import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Button variant="contained" color="primary">
        나 여기서 알바구했다, 알구
      </Button>
    </div>
  );
};

export default Home;
