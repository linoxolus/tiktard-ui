function Home() {
    return (
        <>
            <h2>
                Home Page: {new Date().getHours()}:{new Date().getMinutes()}:
                {new Date().getSeconds()}:{new Date().getMilliseconds()}
            </h2>
        </>
    );
}

export default Home;
