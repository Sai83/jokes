import { ServiceJokesService } from './service-jokes.service';
import { Observable, of } from 'rxjs';



describe('Service Jokes is tested and initialized', () => {

  // tslint:disable-next-line:one-variable-per-declaration
  let serviceJokes: ServiceJokesService, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    serviceJokes = new ServiceJokesService(mockHttp);

  });

  describe('get Jokes', () => {
      it('is called with correct url', () => {
  const expectedUrl = 'https://official-joke-api.appspot.com/jokes/ten';
  mockHttp.get.and.returnValue(of(false));
  serviceJokes.getJokes();

  expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl);
      });


  });


});
