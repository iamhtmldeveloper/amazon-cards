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
      season: "Season 1",
      ratings: "7.8",
      adult: "U/A 16+",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6208d56dd38e3f83840d19bf74d46d993ef183d3a9e974287a197bcbffdc9693._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "The Boys",
      season: "Season 3",
      ratings: "8.7",
      adult: "A",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d909d38c6602e0e536bc72a46316791dd15619efc8ddff7142bcaab5fae6cc76._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "The Flash",
      season: "Season 8",
      ratings: "7.6",
      adult: "u/a 16+",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5fe220c520dbeac9e02e8a85bdce8701e33f73759f11bd44af2be45b009dd087._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "Legacies",
      season: "Season 4",
      ratings: "7.3",
      adult: "u/a 16+",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/913985137f1c8007298fac7f45c668c248392447563744ad169a5d4a42ed7b74._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "Night Sky",
      season: "Season 1",
      ratings: "7.4",
      adult: "u/a 16+",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bc3714a892966e3522bf08da3f9f12706cec2a47bc036a3a52873d4d02dbac3b._UR1920,1080_RI_UX400_UY225_.png",
      mTitle: "Room 203",
      season: "Season 1",
      ratings: "4.4",
      adult: "a",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8f234bc9bae601e5c7433b5f79aabcc407449886c59677b021f57caf1dbc9fbc._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "Young Sheldon",
      season: "Season 5",
      ratings: "7.5",
      adult: "u/a 13+",
    },
    {
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f59b0426483ae5ffeacb7a21bc610c88dcf1f1f6057454d8b62764a9ee16353f._UR1920,1080_RI_UX400_UY225_.jpg",
      mTitle: "The Boys Presents: Diabolical",
      season: "Season 1",
      ratings: "6.9",
      adult: "a",
    },
  ];

  const getAllList = (mList) => {
    return mList.map((list) => (
      <Col lg={3}>
        <Primecards
          imgUrl={list.imgUrl}
          mTitle={list.mTitle}
          season={list.season}
          ratings={list.ratings}
          adult={list.adult}
        />
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
