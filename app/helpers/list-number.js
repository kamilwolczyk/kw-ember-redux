import { helper } from '@ember/component/helper';

export function listNumber(params/*, hash*/) {
  return params[0] + 1;
}

export default helper(listNumber);
