import express from "express";
import {
    createGuest,
    getGuests,
    getGuestById,
    deleteGuest,
    updateGuest
} from "../controllers/guestController.js";

const router = express.Router();

/**
 * @swagger
 * /guests:
 *   post:
 *      summary: Save new guest
 *      description Saves a new guest
 *      responses:
 *        200: 
 *          description: Guest saved
 */
router.post("/guests", createGuest)

/**
 * @swagger
 * /guests:
 *   get:
 *     summary: Get all guests
 *     description: Fetches a list of all guests
 *     responses:
 *       200:
 *         description: A list of guests
 */
router.get("/guests", getGuests);

/**
 * @swagger
 * /guests/{id}:
 *   get:
 *     summary: Get a specific guest by ID
 *     description: Fetch a guest by their unique ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the guest to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A guest object
 *       404:
 *         description: Guest not found
 */
router.get("/guests/:id", getGuestById);

/**
 * @swagger
 * /guests/{id}:
 *   delete:
 *     summary: Delete a guest by ID
 *     description: Delete a guest from the database using their unique ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the guest to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Guest deleted successfully
 *       404:
 *         description: Guest not found
 */
router.delete("/guests/:id", deleteGuest);

/**
 * @swagger
 * /guests/{id}:
 *   put:
 *     summary: Update a guest by ID
 *     description: Update a guest's information in the database using their unique ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the guest to update
 *         schema:
 *           type: string
 *       - name: guest
 *         in: body
 *         required: true
 *         description: The updated guest object
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *     responses:
 *       200:
 *         description: Guest updated successfully
 *       404:
 *         description: Guest not found
 */
router.put("/guests/:id", updateGuest);

export default router;
