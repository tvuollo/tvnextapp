import React from "react";
import Link from 'next/link';

import Layout from './../components/layout';

const Index = () => {

    return (
        <Layout>
            <h1>Index</h1>
            <p>
                React site running on Next.js
            </p>
            <p>
                <Link href="/about" title="About Page">
                    <a>About Page</a>
                </Link>
            </p>
        </Layout>
    );

};

export default Index;