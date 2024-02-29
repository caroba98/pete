import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["value"]

  connect() {
    console.log("hi");
    this.startCounter();
  }

  startCounter() {
    const speed = 200;
    const value = this.valueTarget.getAttribute('akhi');
    const data = this.valueTarget.innerText;
    const time = value / speed;
    if(data < value) {
      this.valueTarget.innerText = Math.ceil(data + time);
        setTimeout(this.startCounter, 1);
      // }else{
      //   this.valueTarget.innerText = value;
      }
  }

}
