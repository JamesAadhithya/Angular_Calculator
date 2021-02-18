import { calcPossibleSecurityContexts } from "@angular/compiler/src/template_parser/binding_parser";
import { Component } from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Calculator for all Your needs';
  firstNumber: number = 0;
  SecondNumber: number = 0;
  isSecNumber: boolean = false;
  firstoperand: number = 0;
  operand: string = "";
  result: number = 0;


  getNumber(temp: number) {
    if (this.isSecNumber) {
      this.SecondNumber = temp;
      this.isSecNumber = false;
    }
    else {
      this.firstNumber = temp;
    }
  }
  Calculation(op: string, fnum: number, snum: number) {
    switch (op) {
      case '+':
        return fnum + snum;
      case '-':
        return fnum - snum;
      case '*':
        return fnum * snum;
      case '/':
        return fnum / snum;
      default:
        return 0;
    }
  }
   getOperand(op: string) {
    this.operand = op;
    this.isSecNumber = true;
  }
   getTotal() {
     this.result = this.Calculation(this.operand, this.firstNumber, this.SecondNumber);
   
  }





















  // operand:string="";
  // tot:number=0;
  // nums:number[]=[];


  // getArray(ex:number[]){
  //   for(let i=0;i<=ex.length;i++){
  //     this.nums[i]=ex[i];
  //   }
  // }

  // number1: number = this.nums[0];

  // number2: number = this.nums[1];

  // getNumber(ex: number):void {
  //   this.number1=ex;

  //   //alert(this.number1);
  //   this.number2=ex;
  // }

  // getOperand(sample:string){
  //   this.operand=sample;
  //   //alert(this.operand);
  // }

  // getTotal(){
  //   switch(this.operand){
  //     case "+":
  //       this.tot=this.number1+this.number2;
  //       break;
  //       case "-":
  //       this.tot=this.number1-this.number2;
  //       break;
  //       case "*":
  //       this.tot=this.number1*this.number2;
  //       break;
  //       case "/":
  //       this.tot=this.number1/this.number2;
  //       break;
  //   }
  // }

} 
