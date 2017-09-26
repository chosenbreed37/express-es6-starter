import mongoose, { Schema } from 'mongoose';

const QuoteSchema = new Schema({
    Text: String,
    Author: String,
    Source: String
});

const QuoteModel = mongoose.model('Quote', QuoteSchema);

QuoteModel.getAll = () => {
    return QuoteModel.find({});
};

export default QuoteModel;
