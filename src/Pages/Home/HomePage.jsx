import NavBarLogin from "../../Components/utlities/NavBarLogin";
import Silder from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Product/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/utlities/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "" }}>
      <NavBarLogin />
      <Silder />
      <HomeCategory />
      <CardProductsContainer title={"الأكثر مبيعاً"} btntitle={"المزيد"} />
      <DiscountSection />
      <CardProductsContainer title={"أحدث الأزياء"} btntitle={"المزيد"} />
      <BrandFeatured title={"أشهر الماركات"} btntitle={"المزيد"} />
      <Footer />
    </div>
  );
};

export default HomePage;
