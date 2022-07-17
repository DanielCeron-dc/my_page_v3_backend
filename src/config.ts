import dotenv from 'dotenv';
dotenv.config();

export const config = {
    db: {
        uri: process.env.DB_URI || '',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    },
    port: process.env.PORT || 5000,
    app: {
        title: 'My page v3'
    }
};