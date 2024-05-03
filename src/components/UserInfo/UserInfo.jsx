// Add the required props
export const UserInfo = ({ userInfo }) => {
  const { name, email } = userInfo;

  return (
    <a className="UserInfo" href={email}>
      {name}
    </a>
  );
};
