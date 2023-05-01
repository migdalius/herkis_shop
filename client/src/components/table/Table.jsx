import React, { useEffect, useState } from "react";
import "./table.css";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { userRequest } from "../../pages/requestMethods";
import { Link } from "react-router-dom";

const Table = ({ users }) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const userDelete = (user) => {
    const userDel = async () => {
      try {
        await userRequest.delete(`users/${user._id}`);
        setUsersList(usersList.filter((u) => u._id !== user._id));
      } catch (error) {
        console.error(error);
      }
    };
    userDel();
  };

  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th className="user-id-title">ID</th>
            <th>Nazwa użytkownika</th>
            <th className="delivery-title">Adres Dostawy</th>
            <th className="email-title">Email</th>
            <th className="phone-title">Telefon</th>
            <th className="date-title">Data Rejestracji</th>
            <th>Operacje</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user._id}>
                <td className="user-id">{user._id}</td>
                <td>{user.username}</td>
                <td className="user-delivery">
                  {user.delivery}, {user.zip} {user.city}
                </td>

                <td className="user-email">{user.email}</td>
                <td className="user-phone">{user.phone}</td>
                <th className="date-time">{user.updatedAt}</th>
                <th>
                  <div className="icons">
                    <Link to={`../moje-konto/lista-uzytkownikow/${user._id}`}>
                      <PencilSquare
                        size={24}
                        color={"#064e3b"}
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                    {!user.isAdmin && (
                      <Trash3Fill
                        size={24}
                        color={"#dc2626"}
                        style={{ cursor: "pointer" }}
                        onClick={() => userDelete(user)}
                      />
                    )}
                  </div>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
