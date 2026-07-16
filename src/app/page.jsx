import SocialMediaHero from "./helpers/SocialMediaHero";
import PasosAgenciaDigital from "./helpers/PasosAgenciaDigital";
import PlataformasAnuncios from "./helpers/PlataformasAnuncios";
import GoogleReviews from "./helpers/GoogleReviews";
import Folowers from "./helpers/Folowers";
import WebsiteBuilder from "./helpers/WebsiteBuilder";
import WhyUs from "./helpers/WhyUs";
import ContactUs from "./helpers/Contactus";
import Fotter from "./helpers/Fotter"
import Whatsappbutton from "./helpers/Whatsappbutton"
export default function Home() {
  return (
    <main>
     <SocialMediaHero></SocialMediaHero>
     <PlataformasAnuncios></PlataformasAnuncios>

     <WhyUs></WhyUs>
  
     <Folowers></Folowers>
        <WebsiteBuilder></WebsiteBuilder>

        <GoogleReviews></GoogleReviews>
     <PasosAgenciaDigital></PasosAgenciaDigital>
     <ContactUs></ContactUs>
     <Whatsappbutton></Whatsappbutton>
     <Fotter></Fotter>
    </main>
  );
}