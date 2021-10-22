
import { Schema, model, Document } from "mongoose";

// variable that containe an test image
const testImage =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";



export interface IProject extends Document {
    title: string;
    description: string;
    labels: string[];
    imgName: string;
    link: string; 
}


const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    labels: {
        type: [String],
        required: true
    },
    imgName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true, 
    }
});

export default model<IProject>("Project", ProjectSchema);
