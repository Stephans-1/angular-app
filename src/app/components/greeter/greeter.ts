import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.html',
  styleUrl: './greeter.scss'
})
export class Greeter {
greet = input("Hello from Greeter Component");
price = input(100);
text = input("IT works!!! Yes, LORD!!!! IT WORKS!!!" );
}
