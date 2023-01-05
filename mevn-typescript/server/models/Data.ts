import { def } from "@vue/shared";
import { Schema, model } from "mongoose";
import { setBlockTracking } from "vue";

const dataSchema = new Schema({
    esfuerzo: {
        type: Number,
        required: true,
        trim: true

    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    done:{
        type: Boolean,
        default: false
    },
    fecha_real: {
        type: Date,
        default: Date()
    },
},
{
    versionKey: false
}
);

export default model ("Data", dataSchema);