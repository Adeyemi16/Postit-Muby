import mongoose from "mongoose";
import mongooseSlugPlugin from "mongoose-slug-plugin";

const storySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,

        },
        description: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Story = mongoose.model('Story', storySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=title%>' }))

export default Story