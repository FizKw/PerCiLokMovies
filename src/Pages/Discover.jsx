import Navbar from "../navbar"
import TopMovieList from "../compoments/TopMovieList"
import Footer from "../footer"

function Discover() {
    return (
        <div className="container mx-auto m-2">
            <Navbar />
            <TopMovieList />
            <Footer />
        </div>
    )
}

export default Discover