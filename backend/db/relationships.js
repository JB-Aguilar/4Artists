const { User } = require('../api/models/user.model')
const { Posts } = require("../api/models/post.model");
const { Like } = require('../api/models/like.model');

const createRelations = async () => {
    
    User.hasMany(Posts, { onUpdate: "CASCADE", onDelete: "CASCADE" });
    Posts.belongsTo(User);

    User.belongsToMany(Posts, {through: Like, timestamps: false})
    Posts.belongsToMany(User, {through: Like, timestamps: false})

}

module.exports = createRelations