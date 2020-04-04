import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit,AfterViewInit {

  nameForm = new FormGroup({
    name : new FormControl('',Validators.required)
  })


  isButtonEnabled: boolean;
  isSpinnerEnabled: boolean;
  isTimeEnabled: boolean;
  timeLeft: number = 5;
  interval;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.router.navigate(['/landing']);
    console.log("data:", this.nameForm.value);
  }

  ngAfterViewInit(){
    // this.router.navigate(['/landing']);
  }
 
  keypress(){
    if(this.nameForm.value.name.length > 5 && this.nameForm.value.name.length < 26)
    {
      this.isButtonEnabled = true;
    }
    else
    {
      this.isButtonEnabled = false;
    }
  }
  onSubmit()
  {
    console.log("Submit");
    this.isButtonEnabled = false;
    this.isSpinnerEnabled = true;
    this.isTimeEnabled = true;
   
    this.startTimer()
    // this.router.navigate(['/landing']);
  }

  startTimer() {
    this.interval = setInterval(() => {
      console.log("Time:",this.timeLeft);
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.router.navigate(['/landing']);
        clearInterval(this.interval);
      }
    },1000)
  }

}
