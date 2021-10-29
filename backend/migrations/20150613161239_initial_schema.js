exports.up = (knex) => {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('email')
            table.string('password')
            table.string('role')
            table.string('bio')
            table.string('mobile')
            table.string('picture')
            table.string('background')
            table.string('gender')
            table.string('birthday')
            table.string('registred')
            table.string('lastLogin')
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
            table.string('content')
            table.string('published')
            table.string('updated')
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
            table.string('published')
            table.string('updated')
        })

        .createTable('reactions', (table) => {
            table.increments('id').primary()

            table.string('label')
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

        .createTable('reactions_posts', (table) => {
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

            table.string('published')
        })

        .createTable('reactions_comments', (table) => {
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

            table.string('published')
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