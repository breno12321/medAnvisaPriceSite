import { IMedication } from './interfaces/IMedication';
import findFilteredLocal from './Providers/LocalProvider';

export default (
  filter: string,
  value: string,
):Promise<IMedication[]> => findFilteredLocal(filter, value);
