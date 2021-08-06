import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  gender: string;
  country: string;
  mpc: string;

  countries: string[] = ['Korea', 'Japan', 'USA', 'London', 'Philippines', 'Thailand'];
  
  users: any[] = [
    { name: 'Kristy', gender: 'female', country: 'Korea',mpc:"001" },
    { name: 'Nick', gender: 'male', country: 'Japan',mpc:"001" },
    { name: 'Ariana', gender: 'female', country: 'USA',mpc:"002" },
    { name: 'Joe', gender: 'male', country: 'London',mpc:"001" },
    { name: 'Albert', gender: 'male', country: 'Philippines',mpc:"002" },
  ];

}
