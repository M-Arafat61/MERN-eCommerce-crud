const Footer = () => {
  return (
    <footer className='footer p-10 '>
      <aside>
        <img className='w-12' src='https://i.ibb.co/5rYWrW8/cap.png' alt='' />
        <p>
          <span className='text-lg font-semibold'>Elite Emporium</span>
          <br />
          Providing reliable service since 1992
        </p>
      </aside>
      <nav>
        <header className='footer-title'>Services</header>
        <a className='link link-hover'>Branding</a>
        <a className='link link-hover'>Design</a>
        <a className='link link-hover'>Marketing</a>
        <a className='link link-hover'>Advertisement</a>
      </nav>
      <nav>
        <header className='footer-title'>Company</header>
        <a className='link link-hover'>About us</a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Jobs</a>
        <a className='link link-hover'>Press kit</a>
      </nav>
      <nav>
        <header className='footer-title'>Legal</header>
        <a className='link link-hover'>Terms of use</a>
        <a className='link link-hover'>Privacy policy</a>
        <a className='link link-hover'>Cookie policy</a>
      </nav>
      <form>
        <header className='footer-title'>Newsletter</header>
        <fieldset className='form-control w-80'>
          <label className='label'>
            <span className=''>Enter your email address</span>
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder='username@site.com'
              className='input input-bordered w-full pr-16'
            />
            <button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
