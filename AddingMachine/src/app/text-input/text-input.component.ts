import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  ops: string[] = [];
  vals: number[] = [];

  constructor() { }

  value: any = '';
  history: any;
  onEnter(value: string) {
    if (this.history == null) {
      this.value = this.run(value);
      this.history = this.run(value) + '\n';
    } else {
      this.value = this.history + this.run(value);
      this.history += this.run(value) + '\n';
    }
  }

  run(toEvaluate: string) {
    const tokens: string[] = toEvaluate.split(' ');
    for (const token of tokens) {
        if (token === '(') {// doNothing
        } else if (token === '+') { this.ops.push(token);
        } else if (token === '-') { this.ops.push(token);
        } else if (token === '*') { this.ops.push(token);
        } else if (token === '/') { this.ops.push(token);
        } else if (token === 'sqrt') { this.ops.push(token);
        } else if (token === ')') {

                                    const op: string  = this.ops.pop();
                                    let v: number = this.vals.pop();
                                    if (op === '+') {v = this.vals.pop() + v;
                                    } else if (op === '-') {v = this.vals.pop() - v;
                                    } else if (op === '*') {v = this.vals.pop() * v;
                                    } else if (op === '/') {v = this.vals.pop() / v;
                                    } else if (op === 'sqrt') { v = Math.sqrt(v);
                                    }
                                    this.vals.push(v);
        } else {
            this.vals.push(Number.parseFloat(token));
        }
    }
    return toEvaluate + '\n>> ' + this.vals.pop();
}


  ngOnInit() {
  }

}
