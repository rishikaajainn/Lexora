const express = require("express");
const bcrypt = require("bcryptjs");
const prisma = require("../prismaClient");

const router = express.Router();

router.post("/signup", async (req, res) => {
        console.log(req.body);

  try {
    const { fullName, email, password, country, language } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields."
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        country,
        language
      }
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
      userId: user.id
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
});



router.post("/login", async (req, res) => {
  

  console.log("Current working directory:", process.cwd());
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required."
      });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    return res.json({
      success: true,
      message: "Login successful.",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        country: user.country,
        language: user.language
      }
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
});

module.exports = router;

