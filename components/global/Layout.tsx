import styled from '@emotion/styled';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout): JSX.Element {
  return (
    <StyledLayout>
      <StyledContents>{children}</StyledContents>
    </StyledLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  display: flex;
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
