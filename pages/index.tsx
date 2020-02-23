import Link from "next/link";
import Footer from "../components/footer";

const Home = () => {
    return (
        <div>
            <img src="https://img.icons8.com/office/100/000000/construction-worker.png"></img>
            <h1>Website Under Construction</h1>
            <Footer/>
            <style jsx>
                {`
                    div {
                        margin-top: 200px;
                    }
                    h1 {
                        text-align: center;
                        font-size: 50px;
                    }
                    img {
                        display: block;
                        margin: 0 auto;
                    }
                `}
            </style>
        </div>
    )
};

export default Home;
