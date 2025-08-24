import mongoose from 'mongoose';

const dashboardSchema = new mongoose.Schema({
  partyName: { type: String, required: true, unique: true },
  voteCount: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Dashboard', dashboardSchema);