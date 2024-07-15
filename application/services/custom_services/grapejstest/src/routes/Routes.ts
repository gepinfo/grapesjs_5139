import { Request, Response, NextFunction } from "express";
import { grapesjstestController } from '../controller/grapesjstestController';


export class Routes {
    private grapesjstest: grapesjstestController = new grapesjstestController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/grapesjstest/:id').delete(this.grapesjstest.Delete);
app.route('/grapesjstest/get/search').get(this.grapesjstest.Search);
app.route('/grapesjstest').put(this.grapesjstest.Update);
app.route('/grapesjstest/:id').get(this.grapesjstest.GetEntityById);
app.route('/grapesjstest/get/search').get(this.grapesjstest.Search);
app.route('/grapesjstest/userid/created_by').get(this.grapesjstest.GetNounCreatedBy);
app.route('/grapesjstest/get/tree').get(this.grapesjstest.GetAllTree);
     }

}