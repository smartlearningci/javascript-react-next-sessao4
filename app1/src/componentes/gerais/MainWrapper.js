import Footer from "./Footer";
import Titulo from "./Titulo";
import BlogPosts from "./BlogPosts";

function MainWrapper() {
    return (
        <div className="main-wrapper">
            
            <Titulo/>
            <BlogPosts/>
            <Footer/>
            
        </div>
    )
}
export default MainWrapper