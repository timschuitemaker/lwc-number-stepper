# LWC Number Stepper
Here’s a simple Lightning Web Component (LWC) implementation for a number stepper. This component allows users to increment or decrement a numeric field, and it can be used for Salesforce number fields.

To use the `NumberStepper` component, simply include it in your Lightning Web Component with the desired values:

```
<c-number-stepper
    value="10"
    step="5"
    min="0"
    max="100"
    onchange={handleValueChange}>
</c-number-stepper>
```

The related Javascript that would fetch the value would look like:

```
handleValueChange(event) {
    console.log('New value:', event.detail);
    // Handle the value update here (e.g., save to Salesforce)
}
```


# LWC Component Documentation

A field component that mimics the styling of a standard Salesforce record form field, allowing for seamless integration with standard Salesforce UI.

### Properties

| Property           | Type    | Default          | Description                                                                                 |
|--------------------|---------|------------------|---------------------------------------------------------------------------------------------|
| `@api value`    | String  | `'0'`   | Initial value.                                                                |
| `@api label`       | String  | Optional         | Label for input.                                                                            |
| `@api fieldName`   | String  | Optional         | Associates the code input with a specific field.                                            |
| `@api readOnly`    | Boolean | `false`          | Flag for turn on / off read-only mode.                                                      |


### Events
## change
Event generated after changing the value in the component and then propagated higher in hierarchy

| Parameter Name       | Type    | Description    |
|----------------------|---------|----------------|
| `value`                | String  | New value      |