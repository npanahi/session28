import Footer from "../../Components/Secondary-Comps/Footer";
import Header from "../../Components/Secondary-Comps/Header";

export default function HomePage(Props) {
  return (
    <>
      <Header />
      {Props.children}
      <Footer />
    </>
  );
}
