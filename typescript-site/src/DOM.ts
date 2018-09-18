export default class DOM {
	public html(id, text) {
		this.id(id).innerHTML = text
	}
	private id(id) {
		return document.getElementById(id)
	}
}