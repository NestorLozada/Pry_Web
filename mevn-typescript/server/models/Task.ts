import { def } from "@vue/shared";
import { Schema, model, InferSchemaType, ObjectId, Types, Model } from "mongoose";
import mongoose from 'mongoose';
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
    esfuerzo:{
        type: Number,
        default: 0
    },
    fecha_creacion:{
        type: Date
    },
    category: { 
        type: Schema.Types.ObjectId, 
        ref: 'Categorias' 
    }
},
{
    versionKey: false
}
);

export default model ("Task", taskSchema);