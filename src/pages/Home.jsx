/* eslint-disable react/prop-types */
import Main from "../components/Main";
import Container from "../shared/Container";

export default function Home({scroll, setScroll}) {
  return <div>
    <Container>

    <Main scroll={scroll} setScroll={setScroll}/>

    </Container>
  </div>;
}
