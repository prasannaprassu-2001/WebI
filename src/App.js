

import ClientLogo from "./Components/ClientLogo";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MarqueeNews from "./Components/MarqueeNews";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import TestimonialCarousel from "./Components/TestimonialCarousel";

import WhyChooseUs from "./Components/WhyChooseUs";


const newsHeadlines = [
  "Breaking: Market hits all-time high!",
  "Sports: Local team wins championship!",
  "Weather: Expect heavy rains tomorrow!",
  "Tech: New AI model surpasses human IQ!",
];

function App() {
  return (
    <div>
<Navbar/>
<Hero/>
<ClientLogo/>
<Services/>
<WhyChooseUs/>
<TestimonialCarousel/>
<MarqueeNews newsItems={newsHeadlines}/>
<Footer/>
    </div>
  );
}

export default App;
