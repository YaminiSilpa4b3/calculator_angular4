import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `\n  <div class=\"calculator\">\n\n                <div class=\"result\">\n                    {{ result }}\n                </div>\n\n                <button (click)=\"addToCalculation('7')\">7</button>\n                <button (click)=\"addToCalculation('8')\">8</button>\n                <button (click)=\"addToCalculation('9')\">9</button>\n                <button (click)=\"calculate('/')\">/</button>\n\n                <button (click)=\"addToCalculation('4')\">4</button>\n                <button (click)=\"addToCalculation('5')\">5</button>\n                <button (click)=\"addToCalculation('6')\">6</button>\n                <button (click)=\"calculate('*')\">X</button>\n\n                <button (click)=\"addToCalculation('1')\">1</button>\n                <button (click)=\"addToCalculation('2')\">2</button>\n                <button (click)=\"addToCalculation('3')\">3</button>\n                <button (click)=\"calculate('-')\">-</button>\n\n                <button (click)=\"addToCalculation('0')\">0</button>\n                <button (click)=\"addToCalculation('.')\">.</button>\n                <button (click)=\"getTotal()\">=</button>\n                <button (click)=\"calculate('+')\">+</button>\n            </div>\n    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	   	result = '';
        decimal = false;
        answer = 0;
        total = [];
        clear = false;
        value;
        operator;
        previous_operator;

        addToCalculation(value) {
        	this.value = value;
	        if (this.clear == true) {
	          	this.result = '';
	            this.clear = false;
	        }
	        if (value == '.') {
	            if (this.decimal == true) {
	                return false;
	            }
	            this.decimal = true;
	        }
	        this.result += value;
	        
        };

        calculate (operator) {
        	this.total.push(this.result);
        	this.result = '';
        	this.previous_operator = operator;
        	if (this.total.length == 2) {
	            var a = Number(this.total[0]);
	            var b = Number(this.total[1]);
	            if (this.previous_operator == '+') {
	                var total = a + b;
	            }
	            else if (this.previous_operator == '-') {
	                var total = a - b;
	            }
	            else if (this.previous_operator == '*') {
	                var total = a * b;
	            }
	            else {
	                var total = a / b;
	            }
	            var answer = total;
	            this.total = [];
	            this.total.push(answer);
	            this.result =  total.toLocaleString();
	            this.clear = true;
       		}
	        else {
	            this.clear = false;
	        }
        	this.decimal = false;
        };

        getTotal() {
	        var a = Number(this.total[0]);
	        var b = Number(this.result);
	        if (this.previous_operator == '+') {
	            var total = a + b;
	            console.log("add" + total);
	        }
	        else if (this.previous_operator == '-') {
	            var total = a - b;
	            console.log("sub"+ total);
	        }
	        else if (this.previous_operator == '*') {
	            var total = a * b;
	            console.log('mul' + total);
	        }
	        else {
	            var total = a / b;
	            console.log('divi' + total);
	        }
	        if (isNaN(total)) {
	            return false;
	        }
	        this.result =  total.toLocaleString();
	        this.total = [];
	        this.clear = true;    
        }
    }
