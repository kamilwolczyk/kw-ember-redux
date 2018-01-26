import reselect from 'npm:reselect';
import { ApplicationState } from '../../application-state';
import { User } from './dtos/user';

const { createSelector } = reselect;

export const currentUserValidator = createSelector(
  (state: ApplicationState) => state.users.current,
  (current: User) => {
    if (!current || !current.firstName || !current.lastName) {
      return false;
    }

    return current.firstName.length > 3 && current.lastName.length > 3
  });
