import React, { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";
import { UserCard } from "../UserCard/UserCard";
import { ApiService } from "../../services/api_service";

type User = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  }
}

export function SearchForm() {
  const [name, setName] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [notfound, setNotFound] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }


  const handleClick = async (event:any) => {
    event.preventDefault();
    setName('');
    const data = await ApiService(`https://dummyjson.com/users/search?q=${name}`);
    if (name == '') {
      setEmpty(true);
      setHasError(true);
    } else{
      setEmpty(false);
    }
    if (data.users.length == 0){
      setNotFound(true);
      setHasError(true);
    } else{
      setNotFound(false);
    }
    setUsers(data.users);
  };

  return (
    <div className="searchForm">
      <form>
        <label htmlFor="name">Введите запрос:</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: hasError ? "3px solid red" : ""
          }}
          onChange={handleNameChange}
        />
        <Button disabled={hasError} onClick={handleClick} isActive={!hasError}>
          Найти
        </Button>
        <div className="usersList">
          {empty ? 'Вы ввели пустой запрос!!!' : users.length ? (!hasError && Array.from(users).map((user:User) => (
            <UserCard key={user.id} image={user.image} firstName={user.firstName} lastName={user.lastName} address={user.address} />
          ))) : (notfound ? 'Пользователи не найдены, проверьте запрос!!!' : '')}
        </div>
      </form>
    </div>
  );
}
