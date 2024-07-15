
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const grapesjstestSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   grape_name: { type: String },
   my_name: { type: String },
   enter_name: { type: String },
   isExpanded: { type: Boolean },
   isSelected: { type: Boolean },
   isLeaf: { type: Boolean },
   parent_id: { type: String },
   id: { type: String },
   category: { type: String },
   gephistoryid: { type: String }
})

const grapesjstestModel = mongoose.model('grapesjstest', grapesjstestSchema, 'grapesjstest');
export default grapesjstestModel;
