import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data-service.service';

const peopleURL = 'https://swapi.dev/api/people';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPeople', () => {
    it('should call GET method with people URL', () => {
      service.getPeople().subscribe();

      const requests = httpMock.match(peopleURL);

      expect(requests.length).toBeGreaterThan(0);
      expect(requests[0].request.method).toEqual('GET');
    });

    it('should return mapped response', () => {
      const mockedData: any = {
        count: 100,
        next: 'https://swapi.co/api/people/?page=2',
        previous: null,
        results: [
          { name: 'Luke Skywalker', height: '172', mass: '77' },
          { name: 'C-3PO', height: '167', mass: '75'}
        ]
      };

      service.getPeople().subscribe(response => {
        expect(response.length).toBe(2);
        expect(response).toEqual(mockedData.results);
      });

      const requests = httpMock.expectOne(peopleURL);
      requests.flush(mockedData);
    });
  });
});

