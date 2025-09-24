import { Component, signal } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeter, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
salute = signal('Hello from Home Component');
home_price = signal(200);
home_text = signal('This is the price for a home greeting');

updateGreeting() {
  this.salute.set('Updated Greeting from Home Component');
  this.home_text.set("You see, Don't you like that?");}

  updatePrice() {
    this.home_price.set(300);
  }
}
