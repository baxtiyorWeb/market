/* eslint-disable react/prop-types */
import Main from "../components/Main";
import Container from "../shared/Container";

export default function Home({ update, setUpdate, scroll, setScroll }) {
  return (
    <div>
      <Container>
        <Main
          update={update}
          setUpdate={setUpdate}
          scroll={scroll}
          setScroll={setScroll}
        />
      </Container>
    </div>
  );
}
