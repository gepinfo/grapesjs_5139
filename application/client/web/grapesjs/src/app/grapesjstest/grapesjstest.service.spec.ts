import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GrapesjstestService } from './grapesjstest.service';


describe('grapesjstestService', () => {
  let service: GrapesjstestService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('sharedServiceMock', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ GrapesjstestService, { provide: sharedServiceMock, useValue: sharedServiceMock } ]
    });
    sharedServiceMock = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  
  // get all Values
  it('should retrieve all values getallgrapesjstest from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      grape_name: 'grape_name 1',
      my_name: 'my_name 1',
      enter_name: 'enter_name 1',
      parent_id: 'parent_id 1',
      id: 'id 1',
      gephistoryid: 'gephistoryid 1',
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/grapesjstest`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllgrapesjstestValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const grapesjstest = { 
      grape_name: 'grape_name 1',
      my_name: 'my_name 1',
      enter_name: 'enter_name 1',
      parent_id: 'parent_id 1',
      id: 'id 1',
      gephistoryid: 'gephistoryid 1',
    };

    
    // Make the API call
    service.PostAllgrapesjstestValues(grapesjstest).subscribe(response => {
      expect(response).toEqual(grapesjstest)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstest`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(grapesjstest);

    // Flush the mocked response
    req.flush(grapesjstest);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const grapesjstest = { 
      id: '12dsadsa',
      grape_name: 'grape_name 1',
      my_name: 'my_name 1',
      enter_name: 'enter_name 1',
      parent_id: 'parent_id 1',
      id: 'id 1',
      gephistoryid: 'gephistoryid 1',
    };
    
    // Make the API call
    service.Updategrapesjstest(grapesjstest).subscribe(response => {
      expect(response).toEqual(grapesjstest);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstest`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(grapesjstest);

    // Flush the mocked response
    req.flush(grapesjstest);
  });
   
  // delete the grapesjstest 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeletegrapesjstestValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstest/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified grapesjstest ID', () => {
    const grapesjstestId = 123;
    const mockResponse = { 
      id: grapesjstestId, 
      grape_name: 'grape_name 1',
      my_name: 'my_name 1',
      enter_name: 'enter_name 1',
      parent_id: 'parent_id 1',
      id: 'id 1',
      gephistoryid: 'gephistoryid 1',
    };

    // Make the request
    service.GetEntityById(grapesjstestId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstestid/`+grapesjstestId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationgrapesjstest
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificgrapesjstest(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstest/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificgrapesjstestHistory
  it('should send a GET request to the correct URL getSpecificgrapesjstestHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificgrapesjstestHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstest/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { grapesjstest: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchgrapesjstest(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/grapesjstest/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
