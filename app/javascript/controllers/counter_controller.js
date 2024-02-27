import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["number"]
  
  count() {
    this.numberTarget.forEach( counter => {
      const animate = () => {
          const value = +counter.getAttribute('akhi');
          const data = +counter.innerText;
          const time = value / 200;
        if(data < value) {
              counter.innerText = Math.ceil(data + time);
              setTimeout(animate, 1);
            }else{
              counter.innerText = value;
            }
      }
      animate();
    });
  }
}
