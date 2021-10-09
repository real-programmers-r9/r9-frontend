import styled from '@emotion/styled';
import { useWindowSize } from 'src/library/hooks/useWindowSize';
import Footer from './Footer';
import Navbar from './Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { isDesktop } = useWindowSize();

  return (
    <StyledLayout>
      <Navbar />
      <StyledContents>{children}</StyledContents>
      {isDesktop && <Footer />}
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #eeeeee;
`;

const StyledContents = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #ffffff;
`;
