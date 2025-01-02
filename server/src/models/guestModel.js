import mongoose from "mongoose";
const guestSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  numberOfGuests: {
      type: Number,
      required: true
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
}

});

const Guest = mongoose.model('Guest', guestSchema);

export default Guest;