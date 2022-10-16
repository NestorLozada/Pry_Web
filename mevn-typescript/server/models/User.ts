import { def } from "@vue/shared";
import { Schema, model } from "mongoose";
import { setBlockTracking } from "vue";


const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true 
    },
    email: {
        type: String,
        require: true,
        trim: true 
    },
    passWord: {
        type: String,
        required: true,
        trim: true 
    },

},
{
    versionKey: false
},
);

export default model ("User", userSchema);