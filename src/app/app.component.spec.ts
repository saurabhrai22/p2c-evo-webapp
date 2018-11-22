import { TestBed, async ,fakeAsync, tick, getTestBed} from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// const routes: Routes = [
//   { path: 'edit', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '',	component: HomeComponent},
//   { path: '**',	component: PageNotFoundComponent},
// ];

describe('AppComponent', () => {
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
       
        RouterModule
      ],
      declarations: [
        AppComponent,
        // LoginComponent,
        // HomeComponent,
        // PageNotFoundComponent
      ],
    }).compileComponents();
    
  }));

  // it('should be able to navigate to `/`',
  //   fakeAsync(() => {
  //     const injector = getTestBed()
  //     const router = injector.get(Router);
  //     const fixture = TestBed.createComponent(AppComponent);
  //     fixture.detectChanges();
  //     // initial navigation
  //     router.navigate(['/edit'])
  //       .then(() => {
  //         expect(router.url).toEqual('');
  //       });
  //     }));

      
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'P2c-webapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('P2cwebapp');
  });


});




