const express = require("express");

const {
  getEntireLog,
  createLog,
  getLogById,
  updateLog,
  deleteLog,
} = require("../controllers/LogController");
 
const router = express.Router();
 
// router.route("/").get(getEntireLog).post(createLog);
// router.route("/:id").get(getLogById).put(updateLog).delete(deleteLog);
router.get('/', getEntireLog);
router.post('/', createLog);

router.get('/:id', getLogById);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;
