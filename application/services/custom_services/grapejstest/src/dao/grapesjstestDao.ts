import * as mongoose from 'mongoose';
import grapesjstestModel from '../models/daomodels/grapesjstest';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class grapesjstestDao {
    private grapesjstest = grapesjstestModel;

    

    constructor() { }
    
    public async Delete(grapesjstestId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: Delete');

    

    
    
    
    this.grapesjstest.findByIdAndRemove(grapesjstestId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(grapesjstestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(grapesjstestData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.grapesjstest.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(grapesjstestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: Update');

    

    
    
    
    this.grapesjstest.findOneAndUpdate({ _id: grapesjstestData._id }, grapesjstestData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(grapesjstestId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: GetEntityById');

    

    
    
    
    this.grapesjstest.findById(grapesjstestId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(grapesjstestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(grapesjstestData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.grapesjstest.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(grapesjstestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: GetNounCreatedBy');

    

    
    
    
    this.grapesjstest.aggregate(([
                        { $match: { $and: [{ created_by: grapesjstestData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}