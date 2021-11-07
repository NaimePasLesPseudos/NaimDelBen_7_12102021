exports.up = (knex) => {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('email')
            table.string('password')
            table.string('role')
            table.text('bio')
            table.string('mobile')
            table.string('picture')
            table.string('background')
            table.string('gender')
            table.string('birthday')
            table.datetime('registred')
            table.datetime('lastLogin')
        })

        .createTable('posts', (table) => {
            table.increments('id').primary()
            table.integer('author_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('SET NULL')
                .index()

            table.string('title')
            table.text('content')
            table.datetime('published')
            table.datetime('updated')
        })

        .createTable('comments', (table) => {
            table.increments('id').primary()
            table.integer('author_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .index()

            table.integer('post_id')
                .unsigned()
                .references('id')
                .inTable('posts')
                .onDelete('CASCADE')
                .index()

            table.string('content')
            table.datetime('published')
            table.datetime('updated')
        })

        .createTable('images', (table) => {
            table.increments('id').primary()
            
            table.integer('post_id')
            .unsigned()
            .references('id')
            .inTable('posts')
            .onDelete('CASCADE')
            .index()
            
            table.string('url')
        })
        
        .createTable('reactions', (table) => {
            table.integer('id').primary()
            table.string('label')
        })

        .createTable('reactions_posts', (table) => {
            table.increments('id').primary()

            table.integer('post_id')
                .unsigned()
                .references('id')
                .inTable('posts')
                .onDelete('CASCADE')
                .index()

            table.integer('reaction_id')
                .unsigned()
                .references('id')
                .inTable('reactions')
                .onDelete('CASCADE')
                .index()

            table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .index()

            table.datetime('published')
        })

        .createTable('reactions_comments', (table) => {
            table.increments('id').primary()
            
            table.integer('comment_id')
                .unsigned()
                .references('id')
                .inTable('comments')
                .onDelete('CASCADE')
                .index()

            table.integer('reaction_id')
                .unsigned()
                .references('id')
                .inTable('reactions')
                .onDelete('CASCADE')
                .index()

            table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .index()

            table.datetime('published')
        })
  }
  
exports.down = (knex) => {
return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('posts')
    .dropTableIfExists('images')
    .dropTableIfExists('comments')
    .dropTableIfExists('reactions')
    .dropTableIfExists('reactions_posts')
    .dropTableIfExists('reactions_comments')
}