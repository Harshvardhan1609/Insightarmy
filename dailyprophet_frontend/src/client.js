import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'pid',
    dataset: 'productionss',
    apiVersion: '2023-01-15',
    token: 'Token_Id' ,
    useCdn: true,
});

const builder  = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
