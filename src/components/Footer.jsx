const Footer = () => (
  <footer className=" p-10 bg-neutral text-neutral-content mt-10">
    <aside>
      <div className="flex justify-center items-center">
        <img className="mt-40 mb-20 " src="/src/assets/logo-footer.png" alt="" />
      </div>
      <p className="font-bold">Cricket © 2024</p>
      <p>Your Company. All Rights Reserved.</p>
    </aside>
    <nav>
      <h6 className="footer-title">Quick Links</h6>
      <a className="link link-hover">Home</a>
      <a className="link link-hover">Services</a>
      <a className="link link-hover">About</a>
      <a className="link link-hover">Contact</a>
    </nav>
  </footer>
);

export default Footer;