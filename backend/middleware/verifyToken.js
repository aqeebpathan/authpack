import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied. Token missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Assign the user ID from the token to the request object
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);

    // Return a 401 status code when verification fails
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token. Access denied.",
    });
  }
};
