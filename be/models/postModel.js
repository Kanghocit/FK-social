import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        maxLength: 500,
    },
    text: {
        type: String
    },
    img: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    replies: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        userProfile: {
            type: String,
        },
        username: {
            type: String,
        },

    }]
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);

export default Post;