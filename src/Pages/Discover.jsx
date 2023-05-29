import Navbar from "../navbar";
import TopMovieList from "../compoments/TopMovieList";
import Footer from "../footer";

function Discover() {
  return (
    <div>
      <div className="container sm:mx-auto">
        <Navbar />
        <TopMovieList />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Discover;
