import jwt from 'jsonwebtoken'

const protect = async (req, res, next) => {

    const token = req.headers.authorization;
    //  check if jwt token exit
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify token using secret key (also checks if token is valid or expired)
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // Returns decoded payload (e.g., { userId: "abc123" })

        // Extract userId from decoded token and attach it to request
        req.userId = decoded.userId;

        // Allow request to continue
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default protect;