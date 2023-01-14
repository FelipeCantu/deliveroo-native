import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'ezef3tkf',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// run this to ad exception for localhost 3000 cors policy 
// sanity cors add http://localhost:3000

export default client