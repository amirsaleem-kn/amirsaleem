const Footer = () => {
    return (
        <div>
            <h1>Amir Saleem (9582678827)</h1>
            <ul>
            <a href="https://stackoverflow.com/users/6289362/amir-saleem" target="_blank"><li><img src="https://img.icons8.com/cute-clipart/24/000000/linkedin.png"/></li></a>
            <a href="https://github.com/amirsaleem-kn" target="_blank"><li><img src="https://img.icons8.com/material-sharp/24/000000/github.png"/></li></a>
            <a href="https://stackoverflow.com/users/6289362/amir-saleem" target="_blank"><li><img src="https://img.icons8.com/color/24/000000/stackoverflow.png"/></li></a>
            </ul>
            <style jsx>{`
                h1 {
                    text-align: center;
                    font-size: 18px;
                }
                div {
                    position: fixed;
                    width: 100%;
                    bottom: 0;
                    padding: 20px 20px;
                }
                ul {
                    display: table;
                    margin: 0;
                    padding: 0;
                }
                ul li {
                    display: table-cell;
                    padding: 5px 10px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}

export default Footer;
