import React from 'react';
import { Errors } from '../../types/ErrorsEnum';
import cn from 'classnames';

interface Props {
  errorNotification: Errors;
}

export const ErrorNotifications: React.FC<Props> = ({ errorNotification }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: errorNotification === Errors.DEFAULT,
      })}
    >
      <button data-cy="HideErrorButton" type="button" className="delete" />
      {errorNotification}
    </div>
  );
};
