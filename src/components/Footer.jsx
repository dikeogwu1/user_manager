import "../styles/footer.css";

function Footer() {
  return (
    <footer className='text-centered footer'>
      <h3>
        &copy; {new Date().getFullYear()}, user manager | completed by Fabian
        Ikem
      </h3>
    </footer>
  );
}
export default Footer;
