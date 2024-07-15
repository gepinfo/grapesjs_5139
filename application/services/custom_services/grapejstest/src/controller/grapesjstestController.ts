import { Request, Response } from 'express';
import { grapesjstestService } from '../service/grapesjstestService';
import { CustomLogger } from '../config/Logger'
let grapesjstest = new grapesjstestService();

export class grapesjstestController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: Search');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: GetEntityById');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: Search');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: GetNounCreatedBy');
    })}
public GetAllTree(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    grapesjstest.GetAllTree(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into grapesjstestController.ts: GetAllTree');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from grapesjstestController.ts: GetAllTree');
    })}


}