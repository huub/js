import DOM from './DOM'
export class Main {
	public dom: DOM;
	private name: string;
	constructor() {
		this.dom = new DOM();
	}
	public sayHi(name) {
		this.name = name
		this.dom.html('hi', name)
	}
}
