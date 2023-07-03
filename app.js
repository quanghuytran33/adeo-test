import { argv } from 'node:process';
import DataService from "./DataService.js";

const dataService = new DataService();

if(argv[2] === '--count') {
    console.log(JSON.stringify(dataService.returnDataWithCountNumber(), null, '\t'));
} else if(argv[2].includes('--filter=')) {
    let filterValue = argv[2].replace(/--filter=/, '');
    console.log(JSON.stringify(dataService.filterCountryHavingAnimal(filterValue), null, '\t'));
}