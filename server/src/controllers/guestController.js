import Guest from "../models/guestModel.js"

// Skapa en ny gäst
export const createGuest = async (req, res) => {
    const guest = new Guest(req.body);
    try {
        await guest.save();
        res.status(201).send(guest);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Hämta alla gäster
export const getGuests = async (req, res) => {
    try {
        const guests = await Guest.find();
        res.status(200).send(guests);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Hämta en specifik gäst
export const getGuestById = async (req, res) => {
    const { id } = req.params;
    try {
        const guest = await Guest.findById(id);
        if (!guest) {
            return res.status(404).send('Guest not found');
        }
        res.status(200).send(guest);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Uppdatera en gäst
export const updateGuest = async (req, res) => {
    const { id } = req.params;
    try {
        const guest = await Guest.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!guest) {
            return res.status(404).send('Guest not found');
        }
        res.status(200).send(guest);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Ta bort en gäst
export const deleteGuest = async (req, res) => {
    const { id } = req.params;
    try {
        const guest = await Guest.findByIdAndDelete(id);
        if (!guest) {
            return res.status(404).send('Guest not found');
        }
        res.status(200).send('Guest deleted');
    } catch (error) {
        res.status(500).send(error);
    }
};