// export constant variable
const laptop = 'ASUS Laptop';

// export function
function exportMobilePhone() {
    console.log('Exported Mobile Phone!');
}

// export class
class China {
    chiniesMethod() {
        console.log('calling China class method...');
    }
}

// Named = export - import by using same name
export {laptop, exportMobilePhone, China};
