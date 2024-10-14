import React, { useEffect, useState } from 'react';
import { getTodos } from './api/todos';

import { TodoList } from './components/TodoList/TodoList';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ErrorNotifications } from './components/Errors/ErrorNotiofications';

import { Todo } from './types/Todo';
import { Errors } from './types/ErrorsEnum';
import { Filter } from './types/FilterEnum';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState(Filter.ALL);
  const [errorNotification, setErrorNotification] = useState<Errors>(
    Errors.DEFAULT,
  );

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => {
        setErrorNotification(Errors.LOADING);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrorNotification(Errors.DEFAULT);
    }, 3000);
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  const getFilteredTodos = () => {
    switch (filter) {
      case Filter.ACTIVE:
        return todos.filter(todo => !todo.completed);

      case Filter.COMPLETED:
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />

        {todos.length && <TodoList todos={filteredTodos} />}

        {todos.length && (
          <Footer
            activeTodosCount={activeTodosCount}
            onFilterChange={setFilter}
            filter={filter}
          />
        )}
      </div>

      <ErrorNotifications errorNotification={errorNotification} />
    </div>
  );
};
