import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <div className="TodoInfo__status">
        {`Status: `}
        {todo.completed ? (
          <span className="TodoInfo__status--true">Done</span>
        ) : (
          <span className="TodoInfo__status--false">Not ready</span>
        )}
      </div>

      <div>{todo.user && <UserInfo userInfo={todo.user} />}</div>
    </article>
  );
};
