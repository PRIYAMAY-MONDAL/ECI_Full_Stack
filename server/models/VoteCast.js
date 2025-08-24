import mongoose from 'mongoose';

const votecastSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  assembly: { type: String, required: true, trim: true },
  voterId: { type: String, required: true, unique: true },
  candidate: { type: String, required: true, trim: true },
  party: { type: String, required: true, trim: true },
  voteId: { type: String, required: true, trim: true },

}, { timestamps: true });

export default mongoose.model('Vote_Cast', votecastSchema);