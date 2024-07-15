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

    

    
    
    
    grapesjstestData.last_modified_date = new Date(),
                                                   this.grapesjstest.findOneAndUpdate({ _id: grapesjstestData._id }, grapesjstestData).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: Update');

         let newresult = result.toObject();  
                                                     delete newresult._id;
                                                     result.last_modified_date = "";
                                                    let temp = new grapesjstestModel(newresult);
                                                    temp.save();

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(grapesjstestId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: GetEntityById');

    

    
    
    
    this.grapesjstest.find({"gephistoryid":grapesjstestId}).sort({last_modified_date: -1}).limit(1).then((result)	=>
     
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
public async GetAllTree(callback){
    
    new CustomLogger().showLogger('info', 'Enter into grapesjstestDao.ts: GetAllTree');

    

    
    
    
    this.grapesjstest.aggregate(([ 
                    {
                        $match: {
                            parent_id: null
                        }
                    },
                    {
                        $graphLookup: {
                            from: "grapesjstest",
                            startWith: "$id",
                            connectFromField: "id",
                            connectToField: "parent_id",
                            depthField: "level",
                            as: "children"
                        }
                    },
                    {
                        $unwind: {
                            path: "$children",
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $sort: {
                            "children.level": -1
                        }
                    },
                    {
                        $group: {"_id":"$_id","parent_id":{"$first":"$parent_id"},"category":{"$first":"$category"},"children":{"$push":"$children"},"grape_name":{"$first":"$grape_name"},"my_name":{"$first":"$my_name"},"enter_name":{"$first":"$enter_name"},"isExpanded":{"$first":"$isExpanded"},"isSelected":{"$first":"$isSelected"},"isLeaf":{"$first":"$isLeaf"},"id":{"$first":"$id"},"gephistoryid":{"$first":"$gephistoryid"}}
                    },
                    {
                        $addFields: {
                            children: {
                                $reduce: {
                                    input: "$children",
                                    initialValue: {
                                        level: -1,
                                        presentChild: [],
                                        prevChild: []
                                    },
                                    in: {
                                        $let: {
                                            vars: {
                                                prev: {
                                                    $cond: [
                                                        {
                                                            $eq: [
                                                                "$$value.level",
                                                                "$$this.level"
                                                            ]
                                                        },
                                                        "$$value.prevChild",
                                                        "$$value.presentChild"
                                                    ]
                                                },
                                                current: {
                                                    $cond: [
                                                        {
                                                            $eq: [
                                                                "$$value.level",
                                                                "$$this.level"
                                                            ]
                                                        },
                                                        "$$value.presentChild",
                                                        []
                                                    ]
                                                }
                                            },
                                            in: {
                                                level: "$$this.level",
                                                prevChild: "$$prev",
                                                presentChild: {
                                                    $concatArrays: [
                                                        "$$current",
                                                        [
                                                            {
                                                                $mergeObjects: [
                                                                    "$$this",
                                                                    {
                                                                        children: {
                                                                            $filter: {
                                                                                input: "$$prev",
                                                                                as: "e",
                                                                                cond: {
                                                                                    $eq: [
                                                                                        "$$e.parent_id",
                                                                                        "$$this.id"
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            children: "$children.presentChild"
                        }
                    }
                ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from grapesjstestDao.ts: GetAllTree');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}