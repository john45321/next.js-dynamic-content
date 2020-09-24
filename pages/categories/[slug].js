import React from 'react';
import Head from 'next/head';
import postCMS from '../../post';

const CategoryPage = ({ result }) => {
    return (
        <>
            <Head>
                {result && <link href={result.assets.stylesheets} rel="stylesheet" />}
            </Head>
            <div>
                <h1>Category page CMS Content</h1>
                <div dangerouslySetInnerHTML={{ __html: result.html }} />
            </div>
        </>
    );
};


export const getServerSideProps = async (context) => {
  const categorySlug = context.query.slug;
  const result = await postCMS(categorySlug);
  return {
    props: {
      result
    }
  };
};


export default CategoryPage;
