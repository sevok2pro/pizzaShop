import { ThunkAction } from '../../../utils';

export function init(): ThunkAction {
  return async () => {
    console.log('init nav bar');
  };
}
