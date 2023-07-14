const { User } = require('../api/models/user.model')
const { Posts } = require("../api/models/post.model");

const createRelations = async () => {
    
    User.hasMany(Posts, { onUpdate: "CASCADE", onDelete: "CASCADE" });
    Posts.belongsTo(User);

    User.belongsToMany(Posts, {through: 'like', timestamps: 'false'})
    Posts.belongsToMany(User, {through: 'like', timestamps: 'false'})
}

module.exports = createRelations