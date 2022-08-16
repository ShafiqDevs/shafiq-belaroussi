import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar scrollAt={230} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
