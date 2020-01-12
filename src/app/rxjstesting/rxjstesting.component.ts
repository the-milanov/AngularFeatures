import { Component } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-rxjstesting",
  templateUrl: "./rxjstesting.component.html",
  styleUrls: ["./rxjstesting.component.scss"]
})
// RxJS
// Observable -- publisher, Observer -- subscriber
// Observable --> next, error & complete
// observable.subscribe(observer | next, error, complete) -- return Subscription object
// Subscription -- has unsubscribe method
// observer -- has next, error & complete methods for manual values
// of(1,2,3) & from([]) -- return Observable
// from(Promise) -->  from(fetch('url')), rest client & then subscribe to it
// interval(1000), Observable called every second with value as number of times called
// fromEvent(el, 'mouseover') -- Observable from event
// ajax('url') -- rxjs type
// Operators: rxjs/operators -- map(), filter(), concat(), flatMap(), scan() like reduce, take() limit, tap -- OperatorFunction type
// Backpressure -- Observable emitting too many values, debounceTime(2000) 2 seconds after last event, throttleTime(), bufferedMap
// switchMap() -- start with one, continue with another Observable, combine() alternative
// Observable has pipe() that takes Operators as parameters
// catchError operator, used in pipe as alternative to error handle in Observer
// retry(3) before catchError, try 3 times before handling error
// Naming convention someValue$: Observable, this.someValue$.subscribe((v)=>this.someValue = v); -- last value
// Angular RxJS: EventEmitter, extends Subject with emit(), HttpClient return Observables, AsyncPipe updates view with latest value
// Subject & BehaviorSubject, BehaviorSubject has last value cached, if Observer subscribes after values are passed, it get's last value
// BehaviorSubject useful for state management in frontend applications
// Memory leaks, unsubscribe when done, if Observable emitts values longer
export class RxjstestingComponent {
  newObs = map((v:number)=> v*v);
  items = of(1, 2, 3).pipe(this.newObs);
  newObservable = this.newObs(this.items);
  myObserver = {
    next: x => console.log("Observer got a next value: " + x),
    error: err => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification")
  };

  constructor() {
    this.items.subscribe(
      v => console.log(v),
      null,
      () => console.log("Completed!")
    );
    this.items.subscribe(this.myObserver);
    this.myObserver.complete();
  }
}
