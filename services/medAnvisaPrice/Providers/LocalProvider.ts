import { readFileSync } from 'fs';
import filepath from 'helpers/filepath';
import getConfig from 'next/config';
import { join } from 'path';
import { IMedication } from '../interfaces/IMedication';

const { serverRuntimeConfig } = getConfig();

const findFilteredLocal = (
  param?: string,
  value?: string,
): Promise<IMedication[]> => new Promise((resolve, reject) => {
  console.log(serverRuntimeConfig.PROJECT_ROOT);
  try {
    // const data = readFileSync(filepath('./medAnvisaPrice.json'));
    const data = readFileSync(join(serverRuntimeConfig.PROJECT_ROOT, './services/medAnvisaPrice/Providers/medAnvisaPrice.json'));
    const parsedData = JSON.parse(Buffer.from(data).toString());
    resolve(parsedData.filter((item: IMedication) => item[param] === value));
  } catch (error) {
    reject(error);
  }
});

export default findFilteredLocal;
