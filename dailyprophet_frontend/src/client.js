import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'k9g4e6dp',
    dataset: 'production',
    apiVersion: '2023-01-13',
    token: 'skT2NscuaI7KvSTEr5UtSpiwKucS1IrHuVIIS9vg2q01kFAio6etS9vzOq2P66nA9GrAwotzxcp9zOTUgamWq6Xwvnrbzhy0L2v28SYV55CNXfjtYgIm1WLAHoeZv6DrhH4ve99eYXSJ3x8jbEQPy3LWx4S4bipJM5afV5c6lXEUMPLB85Ef' ,
    useCdn: true,
});

const builder  = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);