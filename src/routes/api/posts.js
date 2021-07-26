/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
    // TODO connect to Fauna database
    /**
     * @type {import('./_types').Post[]}
     */
    const posts = [{
        text: 'The first post',
        timestamp: new Date(),
        reactions: [{
            title: 'I am Spartacus',
            total: 4,
            emoji: 'sword'
        }],
        comments: []
    }]

    return {
        body: {
            posts
        }
    }
}