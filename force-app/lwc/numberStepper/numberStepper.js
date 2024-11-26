import { LightningElement, api } from 'lwc';

export default class NumberStepper extends LightningElement {
    @api value = 0; // Default value
    @api step = 1; // Step size
    @api min = -Infinity; // Minimum value
    @api max = Infinity; // Maximum value

    // Handle increment
    increment() {
        const newValue = this.value + this.step;
        if (newValue <= this.max) {
            this.value = newValue;
            this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
        }
    }

    // Handle decrement
    decrement() {
        const newValue = this.value - this.step;
        if (newValue >= this.min) {
            this.value = newValue;
            this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
        }
    }

    // Handle direct input change
    handleChange(event) {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue) && newValue >= this.min && newValue <= this.max) {
            this.value = newValue;
            this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
        } else {
            event.target.value = this.value; // Reset to the current valid value
        }
    }
}