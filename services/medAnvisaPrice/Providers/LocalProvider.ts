import { readFileSync } from 'fs';
import filepath from 'helpers/filepath';
import { IMedication } from '../interfaces/IMedication';

const findFilteredLocal = (
  param?: string,
  value?: string,
): Promise<IMedication[]> => new Promise((resolve, reject) => {
  try {
    // const data = readFileSync(filepath('./medAnvisaPrice.json'));
    const data = readFileSync('services/medAnvisaPrice/Providers/medAnvisaPrice.json');
    const parsedData = JSON.parse(Buffer.from(data).toString());
    resolve(parsedData.filter((item: IMedication) => item[param] === value));
  } catch (error) {
    reject(error);
  }
});

export default findFilteredLocal;
