
import { Footer } from 'flowbite-react';


const FooterComponent = () => {
  return (
    <Footer container className='mt-10'>
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href="/"
          src="https://i.ibb.co/sjbfHyD/Digital-Sculp-1-removebg-preview.png"
          alt="Digital Sculp"
          name="Digital Sculp"
        />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="Digital Sculp™" year={2022} />
    </div>
  </Footer>
  );
};

export default FooterComponent;