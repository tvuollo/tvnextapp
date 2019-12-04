import React from "react";
import Link from 'next/link';

import Layout from './../components/layout';

const About = () => {

    return (
        <Layout>
            <h1>About</h1>
            <p>
                This site's purpose is to test developing and deploying a React/Next.js site.
            </p>
            <p>
                <Link href="/">
                    <a>Back to index</a>
                </Link>
            </p>
        </Layout>
    );

};

export default About;