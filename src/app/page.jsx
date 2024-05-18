import Link from "next/link";

const Home = () => {

    return (
        <>
            <div className="layout">
                <h1 className="home_heading"><u>API's Explorer App</u></h1>

                <div className="flex flex-wrap justify-center gap-6 mt-14">
                    <Link className="project_link" href='/joke'>Random Jokes</Link>
                    <Link className="project_link" href='/dictionary'>Dictionary</Link>
                    <Link className="project_link" href='/quote'>Random Quotes</Link>
                </div>
            </div>

        </>
    )
}

export default Home;