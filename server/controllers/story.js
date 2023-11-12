import Story from "../models/Story.js";
export const getAllStory = async (req, res, next) => {
    try {
        const story = await Story.find();
        res.status(200).json(story)
    } catch (error) {
        res.status(500).json(error)
    }
}
 
export const getUserStory = async (req, res, next) => {
    const userId = req.params.id
    try {
        const story = await Story.find({ user: userId });
        res.status(200).json(story)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getExactStoryByTagSlug = async (req, res) => {
    const slugTitle = req.params.slugTitle
    try {
        const story = await Story.findOne({ slug: slugTitle })

        res.status(200).json(story);
    }
    catch (error) {
        // Handle the error appropriately
        res.status(500).json({ error: "An error occurred" });
    }
} 
export const getStoryInTag = async (req, res) => {
    try {
        const tagName = req.params.tagName; // Assuming your route parameter is named "categoryName"

        const storyInTag = await Story.find({ tag: tagName });
        res.status(200).json(storyInTag);
    } catch (error) {
        // Handle the error appropriately
        res.status(500).json({ error: "An error occurred" });
    }
}

export const createNewStory = async (req, res) => {
    const userId = req.params.userId;

    try {
        // Assuming req.body contains the story data, and your Story model has a userId field
        const storyData = {
            ...req.body,
            user: userId,
        };

        const story = await Story.insertMany(storyData);
        res.status(201).json(story);
    } catch (error) {
        res.status(500).json(error);
    }
};

    export const editStory = async (req, res) => {
        const { title, description, tag, thumbnail } = req.body;
        // Finding the task by its ID
        const existingStory = await Story.findById(req.params.id);
        try {
            if (existingStory) {
                // If the task was not found, send a 404 response
                existingStory.title = title || existingStory.title;
                existingStory.description = description || existingStory.description;
                existingStory.tag = tag || existingStory.tag;
                existingStory.thumbnail = thumbnail || existingStory.thumbnail
                

                // Save the updated task to the database
                const updatedStory = await existingStory.save();

                // Send a success response with the updated task
                res.status(200).json(updatedStory);
            }



            // Update the task with the new data
            if (!existingStory) {
                return res.status(404).json({ error: 'Story not found' });
            }
        } catch (error) {
            // Handle errors and send an error response
            res.status(500).json({ error: 'Failed to update the task' });
        }
};
    




export const deleteStory = async (req, res) => {
    try {
        await Story.findByIdAndDelete(req.params.id)
        // if (Story.findById(req.params.id) === null) {
            res.status(200).json("Story deleted successfully")
        // }
        
        
    }
    catch (error) {
        res.status(500).json(error)
    }
}
