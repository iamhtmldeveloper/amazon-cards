import "./App.css";
import Primecards from "./Primecards";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // const imgUrl = [
  //   "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1a34073c7c73bcfc2d05d211b97c26db3e70c631dbf57cf07fad2a89261330d8._UR1920,1080_RI_UX400_UY225_.jpg",
  // ];

  let mList = [
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1a34073c7c73bcfc2d05d211b97c26db3e70c631dbf57cf07fad2a89261330d8._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "The Summer I Turned Pretty",
    },
  ];

  const getAllList = (mList) => {
    return mList.map((list) => (
      <Col lg={3}>
        <Primecards imgUrl={list.imgUrl} mTitle={list.mTitle} />
      </Col>
    ));
  };

  return (
    <>
      <Container fluid>
        <Row>{getAllList(mList)}</Row>
      </Container>
    </>
  );
}

export default App;
