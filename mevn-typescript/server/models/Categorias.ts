import { def } from "@vue/shared";
import { Schema, model } from "mongoose";
import { setBlockTracking } from "vue";

const dataSchema = new Schema({
    
    titulo:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    
},
{
    versionKey: false
}
);

export default model ("Categorias", dataSchema);