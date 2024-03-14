import mongoose from 'mongoose';

let isConnected: boolean = false;

const uri: string = process.env.MONGO_URI || '';

export async function connectToDatabase(): Promise<void> {
  if (isConnected) {
    console.log('Already connected to the database.');
    return;
  }

  if (!uri) {
    console.error('MONGO_URI is not defined.');
    throw new Error('MONGO_URI is not defined.');
  }

  try {
    await mongoose.connect(`${uri}/e_commerce`, {});

    console.log('Connected to the database.');
    isConnected = true;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Failed to connect to the database.');
  }
}
