import express from "express";
import {
    getGuests,
    getGuestById,
    deleteGuest,
    updateGuest
} from "../controllers/guestController.js"

const router = express.Router();

router.get("/guests", getGuests);
router.get("/guests:id", getGuestById);
router.delete("/guests:id", deleteGuest);
router.get("/guests:id", updateGuest);

export default router;