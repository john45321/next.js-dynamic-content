import React from 'react';
import Link from 'next/link';

const IndexPage = () => {
    return (
        <div>
            <Link href="/categories">
                <a>Categories</a>
            </Link>
        </div>
    );
};

export default IndexPage;
