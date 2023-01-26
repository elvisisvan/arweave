export function handle(state, action) {
    if(action.input.function === 'initialize') {
        state.author = action.caller
    }
    if(action.input.function === 'createPost' && action.caller === state.author) {
        const posts = state.posts
        posts[action.input.post.id] = action.input.post
        state.posts = posts
    }
    if(action.input.function === 'updatePost' && action.caller === state.author) {
        const posts = state.posts
        const posttoUpdate = action.input.post
        posts[posttoUpdate.id] = posttoUpdate
        state.posts = posts
    }
    }
    if(action.input.function === 'deletePost' && action.caller === state.author) {
        const posts = state.posts
        delete posts[action.input.post.id]
        state.posts = posts
    }
    return {state}
}