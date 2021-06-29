
import { ResponseData } from './interfaces';
import { responseData } from './data';

export const fakeFetchData = (): Promise<ResponseData> => {
    return new Promise(resolve => { 
        setTimeout(() => resolve(responseData), 1000);
    });
}