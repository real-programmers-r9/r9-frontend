import styled from '@emotion/styled';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout): JSX.Element {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
