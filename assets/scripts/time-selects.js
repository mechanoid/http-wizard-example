class TimeSelects extends HTMLElement {
  connectedCallback() {
     this.timeField =  this.querySelector('input[type="time"]')
     if (!this.timeField) throw new Error('no time input available!')

     this.addEventListener('time-selected', (event) => {
       const { time } = event.detail
       this.timeField.value = time
     })
   }
 }

 class TimeSelect extends HTMLElement {
   connectedCallback() {
     this.time = this.getAttribute('time')

     this.addEventListener('click', () => {
       const event = new CustomEvent("time-selected", {
         detail: { time: this.time },
         bubbles: true
       });

       this.dispatchEvent(event)
     })
   }
 }

 customElements.define('time-selects', TimeSelects)
 customElements.define('time-select', TimeSelect)
