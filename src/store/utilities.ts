
import { ResponseData } from './interfaces';
import { responseData, garyvee } from './data';

// Mocking only for 2 users, else reject fetch
export const fakeFetchData = (username: string): Promise<ResponseData> => {
    return new Promise((resolve, reject) => {
        if (username === 'goat') {
            setTimeout(() => resolve(responseData), 1000);
        } else if (username === 'garyvee') {
            setTimeout(() => resolve(garyvee), 1000);
        } else {
            reject('no user');
        }
    });
}