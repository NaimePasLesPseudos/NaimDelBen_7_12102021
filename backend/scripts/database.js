/**
 * Create database tables and columns
 */
const Post = require('../app/models/Post')
const User = require('../app/models/User')

async function createSchema() {
    console.log("========= Start database creation process...")
    try {
        console.log("=== Create Post ans User table")
        await Post.create()
        await User.create()
    } catch (error) {
        console.log("=== !!! Problem when creating Post ans User table !!!")
    }
    console.log("=== Post ans User table created")
    console.log("========= End database creation process")
}

async function dummyData() {
    console.log("========= Create a dummy data process...")
    try {
        console.log("=== Create a dummy post")
        
        const user = await User.query().insertGraph({
            name: "Moi",
            email: "moi@lui.com",
            role: "admin",
            password: "SuperMDP",
        })
        
        const post = await Post.query().insertGraph({
            author_id: 1,
            title: "Mon premier Post",
            content: "je kifferai tellement bosser sur Hajime ! <3",
            published: new Date().toUTCString(),
            updated: new Date().toUTCString(),
        })
    
        console.log(post)
        console.log(user)
    } catch (error) {
        console.log("=== !!! Problem when creating Post ans User data !!!")
        console.error( error )
    }
    console.log("========= End dummy data process")
}

createSchema().then(dummyData)