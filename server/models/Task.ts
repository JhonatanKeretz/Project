import { Schema, model } from 'mongoose';


const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    why: {
        type: String,
        required: true,
        trim: true,        
    },
    when: {
        type: String,
        required: true,
        trim: true,        
    },
    where: {
        type: String,
        required: true,
        trim: true,        
    },
    who: {
        type: String,
        required: true,
        trim: true,        
    },
    how: {
        type: String,
        required: true,
        trim: true,        
    },
    howmuch: {
        type: String,
        required: true,
        trim: true,        
    },
    howmuchValor: {
        type: String,
        required: true,
        trim: true,        
    },
    priority: {
        type: String,
        required: true,
        trim: true,        
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    done:{
        type: Boolean,
        default: false,
    }, 
}, {
    versionKey: false,
})

export default model('Task', taskSchema);