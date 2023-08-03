import { useRouter } from "next/router";

function ClientProjectPage() {
    const router = useRouter();

    console.log(router.query)
    return (
        <h1>The Projects of a Given Client</h1>
    );
}

export default ClientProjectPage;