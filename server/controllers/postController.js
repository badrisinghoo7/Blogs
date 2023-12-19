//Post Controller here

// ======> Create A post for user
//POST : api/posts
// Protected
const createPost = async (req, res, next) => {};

// ======> Get single Post
//GET : api/posts/:id
// UNprotected
const getPost = async (req, res, next) => {};
// ======> Get All Post
//GET : api/posts/
// UNprotected
const getPosts = async (req, res, next) => {};
// ======>Get posts by category
//GET : api/posts/category/:category
// Unprotected
const getCategoryPost = async (req, res, next) => {};

// ======> Get users/Authors post
//GET : api/posts
// Unprotected
const getUserPost = async (req, res, next) => {};

// ======> Edit post
//PATCH : api/posts/:id
// Protected
const editPost = async (req, res, next) => {};

// ======> Delete a post
//DELETE : api/posts/:id
// Protected
const deletePost = async (req, res, next) => {};



module.exports = {
    createPost,
    getPost,
    getPosts,
    getCategoryPost,
    getUserPost,
    editPost,
    deletePost
}