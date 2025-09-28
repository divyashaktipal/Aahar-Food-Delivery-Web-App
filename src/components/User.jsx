const User = ({name}) => {
  return (
    <div className="user-Card">
      <div className="userName">Name: {name}</div>
      <div className="userBio">Junior Software Engineer</div>
      <div className="userLocation">Udaipur, 313003</div>
    </div>
  );
};

export default User;
