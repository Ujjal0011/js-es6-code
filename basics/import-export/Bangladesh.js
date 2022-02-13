// same name = named import - export
import {laptop, exportMobilePhone, China} from './China.js';
import Goru from './India.js';

console.log(laptop);

exportMobilePhone();

const chiniesObj = new China();
chiniesObj.chiniesMethod();

const indianObj = new Goru();
indianObj.indianMethod();
