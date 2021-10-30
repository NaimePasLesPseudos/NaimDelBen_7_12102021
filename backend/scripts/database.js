/**
 * Create database tables and columns
 */
const Post = require('../app/models/Post')
const User = require('../app/models/User')
const Comment = require('../app/models/Comment')
const bcrypt = require('bcrypt')

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
        
        const superPassword = "MotDePasse"
        const hash = await bcrypt.hash(superPassword, 10) 

        const user = await User.query().insertGraph({
            name: "l'équipe communication",
            email: "communication@groupomania.com",
            role: "admin",
            password: hash,
            registred: new Date().toUTCString(),
            lastLogin: new Date().toUTCString(),
        })
        
        const post = await Post.query().insertGraph({
            author_id: 1,
            title: "Bienvenue sur Groupomania.",
            content: "L'installation semble s'être bien déroulée. Ceci est le premier article de votre nouveau réseau social d'entreprise - Groupomania ! Faites un tour des fonctionnalités que vous proposes ce site : Rajouter un article, commenter un article ou mettre une réaction. À bientôt !",
            published: new Date().toUTCString(),
            updated: new Date().toUTCString(),
        })

        const comment = await Comment.query().insertGraph({
            post_id: 1,
            author_id: 1,
            content: "Ceci est votre premier commentaire sur le réseau social d'entreprise. Vous pouvez répondre à chacun des articles et votre commentaire s'affichera en dessous. Avec bienvaillance les réponses.",
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