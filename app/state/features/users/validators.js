import reselect from 'npm:reselect';

const { createSelector } = reselect;

export const currentUserValidator = createSelector(
  state => state.users.current,
  current => {
    if (!current || !current.firstName || !current.lastName) {
      return false;
    }

    return current.firstName.length > 3 && current.lastName.length > 3
  });
