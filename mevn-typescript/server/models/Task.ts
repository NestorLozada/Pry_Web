import { def } from "@vue/shared";
import { Schema, model } from "mongoose";
import { setBlockTracking } from "vue";

const taskSchema = new Schema({
    title: {
        type: String,
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
},
{
    versionKey: false
}
);

export default model ("Task", taskSchema);