import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true,
},
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
},
avatar:{
    type: String,
    default: "https://www.google.com/imgres?q=images%20at%20google%20dp&imgurl=https%3A%2F%2Fi.pinimg.com%2F564x%2F8b%2F91%2F08%2F8b9108f4078a5253f79a350f5a4cfc78.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fenregistrements-rapides--24629129205370625%2F&docid=mJ-4yxqX1F_vnM&tbnid=UkBiZ8Xr-z4P8M&vet=12ahUKEwjutPSMw-aUAxWoWaQEHW5fHv8QnPAOegQIFBAB..i&w=517&h=564&hcb=2&ved=2ahUKEwjutPSMw-aUAxWoWaQEHW5fHv8QnPAOegQIFBAB"
},
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
