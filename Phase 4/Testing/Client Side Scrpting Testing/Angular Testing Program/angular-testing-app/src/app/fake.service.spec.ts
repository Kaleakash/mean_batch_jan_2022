import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FakeService } from './fake.service';
describe('FakeService', () => {
  let service: FakeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]    // we have to import because it HttpClient is part of HttpClientModule
    });
    // Di for Service class 
    service = TestBed.inject(FakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("service class function testing",()=> {
    expect(service.sayHello("Raj")).toContain("Raj");
  })

  it("Fake Service Book Rest API Testing ",(done)=> {
    // Asynchronous data get load using subscribe method 
    service.loadAllBooksDetails().subscribe(res=> {
      expect(res.length).toEqual(8);
      let book = res[0];
      expect(book.id).toEqual(1);
      expect(book.author_id).toEqual(1);
      expect(book.title).toEqual("Oliver Twist");
      expect(book.pages).toBeGreaterThan(100);
      expect(book.releaseDate).toBe("1839");
      expect(book.isbn).toEqual("wt345");
      done();     // wait to finish the asynchronous code 
    })
  })
});
