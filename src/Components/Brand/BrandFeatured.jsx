import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utlities/SubTiltle";
import image1 from "../../assets/images/brand1.png";
import image2 from "../../assets/images/brand2.png";
import image3 from "../../assets/images/brand3.png";
import image4 from "../../assets/images/brand2.png";
import BrandCard from "./BrandCard";


const BrandFeatured = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <Row className="my-1 d-flex justify-content-between">
        <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
        <BrandCard title="title one" background="black" img={image1} />
        <BrandCard background="black" title="title one" img={image2} />
        <BrandCard background="black" title="title one" img={image3} />
        <BrandCard background="black" title="title one" img={image4} />
        <BrandCard background="black" title="title one" img={image3} />
        <BrandCard background="black" title="title one" img={image2} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;
