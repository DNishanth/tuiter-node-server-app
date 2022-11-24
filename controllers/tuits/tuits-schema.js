import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    username: String,
    handle: String,
    time: String,
    topic: String,
    title: String,
    image: String,
}, {collection: 'tuits'});
export default schema;