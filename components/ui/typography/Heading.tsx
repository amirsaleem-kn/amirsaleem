const Heading = (props) => {
    return (
        <div>
            <h1>{props.children}</h1>
            <style jsx>
                {`
                    h1 {
                        font-size: 65px;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
}

export default Heading;