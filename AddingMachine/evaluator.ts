class Evaluator {
    ops: string[] = [];
    vals: number[] = [];

    constructor() {}

    run(toEvaluate: string) {
        const tokens: string[] = toEvaluate.split('');
        for (const token of tokens) {
            if (token === '(') {// doNothing
            } else if (token === '+') { this.ops.push(token);
            } else if (token === '-') { this.ops.push(token);
            } else if (token === '*') { this.ops.push(token);
            } else if (token === '/') { this.ops.push(token);
            } else if (token === 'sqrt') { this.ops.push(token);
            } else if (token === ')') { this.ops.push(token);

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
                this.vals.push(+token);
            }
        }
        return this.vals.pop();
    }
}
