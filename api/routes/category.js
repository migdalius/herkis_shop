const Category = require("../models/Category");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//Create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Category

router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    const cat = await Category.find({
      categories: {
        $in: [qCategory],
      },
    });
    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
