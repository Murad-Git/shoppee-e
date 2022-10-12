import DiscountSection from '@/components/discountSection/DiscountSection';
import Footer from '@/components/footer/Footer';
import FromBlog from '@/components/fromBlog/FromBlog';
import HeroCarousel from '@/components/hero/HeroCarousel';
import InfoBlock from '@/components/infoBlock/InfoBlock';
import InstagramFollow from '@/components/InstagramFollow/InstagramFollow';
import Header from '@/components/header/Header';
import ShopSection from '@/components/shopSection/ShopSection';
import TopProducts from '@/components/topProducts/TopProducts';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <ShopSection />
      <DiscountSection />
      <TopProducts />
      <hr />
      <InfoBlock />
      <hr />
      <FromBlog />
      <InstagramFollow />
      <Footer />
    </div>
  );
}
