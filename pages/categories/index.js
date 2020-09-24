import React from 'react';
import Link from 'next/link';

const Categories = () => {
    return (
        <div>
            <Link href="/categories/[slug]" as="/categories/online-cloud-storage">
                <a>Online Cloud Storage</a>
            </Link>
        </div>
    );
};

export default Categories;
