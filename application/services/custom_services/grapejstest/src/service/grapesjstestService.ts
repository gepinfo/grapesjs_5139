import { Request, Response } from 'express';
import {grapesjstestDao} from '../dao/grapesjstestDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';















let grapesjstest = new grapesjstestDao();

export class grapesjstestService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: Delete')
     let  grapesjstestId = req.params.id;
     grapesjstest.Delete(grapesjstestId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: Search')
     let  grapesjstestData = req.query;
     grapesjstest.Search(grapesjstestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: Update')
     let  grapesjstestData = req.body;
     grapesjstest.Update(grapesjstestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: GetEntityById')
     let  grapesjstestId = req.params.id;
     grapesjstest.GetEntityById(grapesjstestId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: Search')
     let  grapesjstestData = req.query;
     grapesjstest.Search(grapesjstestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: GetNounCreatedBy')
     let  grapesjstestData = { created_by: req.query.createdby };
     grapesjstest.GetNounCreatedBy(grapesjstestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
public  GetAllTree(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into grapesjstestService.ts: GetAllTree')
     
     grapesjstest.GetAllTree((response)=>{
             new CustomLogger().showLogger('info', 'Exit from grapesjstestService.ts: GetAllTree')
             
             
            callback(response);

         });
    }
    
    
    
    
}