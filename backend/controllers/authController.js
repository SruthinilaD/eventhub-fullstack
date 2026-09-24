const {
  registerUser,
  loginUser,
} = require("../services/authService");

const registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerUser(
      name,
      email,
      password,
      "CUSTOMER"
    );

    res.status(201).json({
      message: "Customer registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    if (error.message === "Email already registered") {
      return res.status(409).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Customer registration failed",
    });
  }
};

const registerOrganizer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerUser(
      name,
      email,
      password,
      "ORGANIZER"
    );

    res.status(201).json({
      message: "Organizer registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    if (error.message === "Email already registered") {
      return res.status(409).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Organizer registration failed",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    res.status(200).json({
      message: "Login successful",
      ...result,
    });
  } catch (error) {
    console.error(error);

    if (error.message === "Invalid email or password") {
      return res.status(401).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Login failed",
    });
  }
};

const getMe = (req, res) => {
  res.status(200).json({
    message: "Authenticated user",
    user: req.user,
  });
};

module.exports = {
  registerCustomer,
  registerOrganizer,
  login,
  getMe,
};