import { useRouter } from "next/router";

function PortfolioPage() {
    const router = useRouter();

    console.log(router.query)
    return (
        <h1>The Portfolio Page</h1>
    );
}

export default PortfolioPage;