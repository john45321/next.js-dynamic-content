import axios from 'axios';

const postCMS = async (slug) => {
    const url = `${process.env.CMS_API_URL}/render-page/`;
    let pageSlug = slug;

    // If the pageSlug is not start with `/`, then create the slug with `/`
    if (!pageSlug.startsWith('/')) {
        pageSlug = `/${pageSlug}`;
    }

    const head = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    const data = JSON.stringify({
        username: process.env.CMS_API_USERNAME,
        password: process.env.CMS_API_PASSWORD,
        slug: pageSlug
    });

    try {
        const response = await axios.post(url, data, {
            headers: head
        });
        return response.data;
    } catch (e) {
        return e;
    }
};

export default postCMS;
