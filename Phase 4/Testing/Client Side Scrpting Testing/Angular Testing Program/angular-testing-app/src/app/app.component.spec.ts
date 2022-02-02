import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// suite 
describe('AppComponent', () => {

  // hook functions : it will call before each it function 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent        // load the AppComponent 
      ],
    }).compileComponents();  // compile the component 
  });

  // spec 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // we get the id of component 
    const app = fixture.componentInstance;      // get the reference of component 
    expect(app).toBeTruthy();           // app reference created...
  });

  it(`should have as title 'angular-testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-app');// check title variable value 
  });

  it('should render title', () => {   // to check span tag value 
    const fixture = TestBed.createComponent(AppComponent);  // got component id 
    fixture.detectChanges();      // load the dome with static or dynamic value. 
    const compiled = fixture.nativeElement as HTMLElement;  // get dom reference. 
    let spanTagValue = compiled.querySelector('.content span')?.textContent;
    expect(spanTagValue).toContain('angular-testing-app app is running!');
  });
  
  it("Dom Testing",()=> {
    let obj = TestBed.createComponent(AppComponent);
    obj.detectChanges();
    let ref = obj.nativeElement as HTMLElement;
    let h1TagValue = ref.getElementsByTagName("h2")[0].innerText;
    expect(h1TagValue).toEqual("Welcome to Angular Testing");
  })

  it("Event Testing",()=> {
    let obj = TestBed.createComponent(AppComponent);
    obj.detectChanges();
    let ref = obj.debugElement.nativeElement;
    let button = ref.querySelector("#b1");
    let app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app.flag).toEqual("");
    button?.click();
    app.fun();
    console.log(app.flag)
    //expect(app.flag).toEqual("Welcome");
  })
  it("Property testing ",()=> {
    let obj = TestBed.createComponent(AppComponent).componentInstance;
    expect(obj.id).toEqual(100);
    expect(obj.name).toEqual("Raj");
    expect(obj.res).toBeTruthy();
    expect(obj.names.length).toEqual(4);
  })
  it("testing employee array object throug component",()=> {
    let obj = TestBed.createComponent(AppComponent).componentInstance;
    expect(obj.employees.length).toEqual(4);
    let emp = obj.employees[0];
    expect(emp.id).toEqual(1);
    expect(emp.name).toEqual("Ravi");
    expect(emp.age).toEqual(21);
  })
  it("component function testing to check username and password",()=> {
    let obj = TestBed.createComponent(AppComponent).componentInstance;
    expect(obj.msg).toEqual("");
    obj.checkUser("Raj","123");
    expect(obj.msg).toEqual("successfully login")
  })

});
