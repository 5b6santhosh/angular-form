import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  { Fire} from './values';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  v:Fire;
  VulFormValid: boolean = false;
  //form:FormGroup;
  constructor(){
    this.v=new Fire();
    
  }

  ngOnInit() {

  }
  form= new FormGroup({
  FirstName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z \-\']+')])),
  //FirstName:new FormControl('',[Validators.minLength(3)]),
  LastName: new FormControl('', [Validators.required]),
  Email: new FormControl('', [Validators.required]),
  MobileNumber:new FormControl('',[Validators.required]),
  LandLineNumber:new FormControl('',[Validators.required])

  });
  sub(v){
     if (this.form.invalid) {
      this.VulFormValid = true;
    }
    else {
      this.VulFormValid = false;
      //alert(JSON.stringify(v));
      console.log(v);
      this.form.reset();
    }
  }
}
