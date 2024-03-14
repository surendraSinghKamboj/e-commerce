import { generateOTP } from '@/libs/otpGenerater';
import mongoose, { Document, Schema } from 'mongoose';


// Define the interface for the User document
interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'superadmin' | 'customer';
  recentOtp: string;
  otpTimestamp: Date;
}

// Define the schema for the User document
const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin', 'customer'], required: true },
  recentOtp: { type: String, required: true, default:generateOTP() }, // Default otp generator function
  otpTimestamp: { type: Date, required: true, default: Date.now }, // Default to current timestamp
}, {
  timestamps: true, // Add timestamps to the schema
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
