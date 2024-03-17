import "./style.css";

type Address = {
  city: string;
};

type UserCardProps = {
  image: string;
  firstName: string;
  lastName: string;
  address: Address;
};

export function UserCard(props: UserCardProps) {
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} alt="User" />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
