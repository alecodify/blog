import jwt from "jsonwebtoken";

const jwtManager = (user) => {
    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "3d" });

    return accessToken;
}

export default jwtManager;
