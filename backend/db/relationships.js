const { User } = require('../api/models/user.model')
const { Posts } = require("../api/models/post.model");

const createRelations = async () => {
    
    User.hasMany(Posts, { onUpdate: "CASCADE", onDelete: "CASCADE" });
    Posts.belongsTo(User);
}

module.exports = createRelations