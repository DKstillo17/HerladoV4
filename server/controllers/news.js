import NewMessage from '../models/newMessage.js';

export const getNews = async (req, res) => {
    try {
        const newMessages = await NewMessage.find();

        res.status(200).json(newMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
} 

export const createNews = async (req, res) => {
    const npost = req.body;

    const newPost = new NewMessage(npost);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}