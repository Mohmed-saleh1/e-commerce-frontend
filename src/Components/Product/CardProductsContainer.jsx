import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utlities/SubTiltle";
import ProductCard from "./ProductCard";
import image1 from "../../assets/images/prod1.png";
import image2 from "../../assets/images/prod4.png";
import image3 from "../../assets/images/prod3.png";
import image4 from "../../assets/images/prod4.png";

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
        <ProductCard title="title one" background="black" img={image1} />
        <ProductCard background="black" title="title one" img={image2} />
        <ProductCard background="black" title="title one" img={image3} />
        <ProductCard background="black" title="title one" img={image4} />
        <ProductCard background="black" title="title one" img={image4} />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
