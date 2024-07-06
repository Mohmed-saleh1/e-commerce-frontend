import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utlities/SubTiltle";
import CategoryCard from "../Category/CategoryCard";
import image1 from "../../assets/images/prod1.png";
import image2 from "../../assets/images/prod4.png";
import image3 from "../../assets/images/prod3.png";
import image4 from "../../assets/images/prod4.png";

const HomeCategory = () => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="#" />
        <CategoryCard title="title one" background="black" img={image1} />
        <CategoryCard background="black" title="title one" img={image2} />
        <CategoryCard background="black" title="title one" img={image3} />
        <CategoryCard background="black" title="title one" img={image4} />
        <CategoryCard background="black" title="title one" img={image3} />
        <CategoryCard background="black" title="title one" img={image2} />
        <CategoryCard background="black" title="title one" img={image4} />
      </Row>
    </Container>
  );
};

export default HomeCategory;
