export default function fillFormWithData(formRef, formValue) {
    if (!formValue) {
        return;
    }

    Object.entries(formValue).map(([inputName, value]) => {
        if (!formRef.elements.namedItem(inputName)) {
            return;
        }
        if (Array.isArray(value)) {
            value = value.join(', ');
        }
        formRef.elements.namedItem(inputName).value = value;
    });
}