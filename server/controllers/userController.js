import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// jwt token for authorization
const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return token;
}

// controller for user registration
// POST: /api/users/register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if required fields are present
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        // check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: 'User already exists' })
        }

        // create new user and encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // to create new usser
        const newUser = await User.create({
            name, email, password: hashedPassword
        })

        // generate token
        const token = generateToken(newUser._id)

        // Remove password before sending response (security step)
        newUser.password = undefined;

        // return success message
        return res.status(201).json({ message: 'User created successfully', token, user: newUser })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// controller for user login
// POST: /api/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }

        // check if password is correct
        if (!user.comparePassword(password)) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }

        // generate token
        const token = generateToken(user._id)

        // Remove password before sending response (security step)
        user.password = undefined;

        // return success message
        return res.status(200).json({ message: 'Login successful', token, user })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


// controller for getting user by id
// GET: /api/users/data
export const getUserById = async (req, res) => {
    try {
        // Get userId from request (set by auth middleware)
        // yeah hamko middleware se milega
        const userId = req.userId;

        // check if user exists
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Remove password before sending response (security step)
        user.password = undefined;

        // return user
        return res.status(200).json({ user })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// controller for getting user resumes
// GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
    try {
        // Get userId from request (set by auth middleware)
        // yeah hamko middleware se milega
        const userId = req.userId;

        // return user resumes
        const resumes = await Resume.find({userId})
        return res.status(200).json({resumes})

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}