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
            <th class="user-id-title">ID</th>
            <th>Nazwa użytkownika</th>
            <th class="delivery-title">Adres Dostawy</th>
            <th class="email-title">Email</th>
            <th class="phone-title">Telefon</th>
            <th class="date-title">Data Rejestracji</th>
            <th>Operacje</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <>
                <tr>
                  <td class="user-id">{user._id}</td>
                  <td>{user.username}</td>
                  <td class="user-delivery">
                    {user.delivery}, {user.zip} {user.city}
                  </td>

                  <td class="user-email">{user.email}</td>
                  <td class="user-phone">{user.phone}</td>
                  <th class="date-time">{user.updatedAt}</th>
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
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
