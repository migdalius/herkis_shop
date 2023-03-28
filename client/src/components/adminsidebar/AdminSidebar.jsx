import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSucess } from "../../redux/userRedux";

const SideBar = styled.div``;
const UserDataContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 5px;
`;
const UserTitle = styled.p`
  font-size: 14px;
`;
const UserEmail = styled.p`
  font-size: 14px;
`;

const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  margin-bottom: 30px;
`;

const UserDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  gap: 5px;
  cursor: pointer;
`;

const UserDashboardItem = styled.div`
  font-size: 14px;
`;
const AdminSidebar = () => {
  const user = useSelector((state) => state.user);
  console.log(user.currentUser.isAdmin);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSucess());

    window.location.href = "/";
  };

  return (
    <SideBar>
      <UserDataContainer>
        <UserTitle>
          Rodzaj konta: {user.currentUser.isAdmin ? "Admin" : "Zwykłe"}
        </UserTitle>
        <UserEmail>{user.currentUser.email}</UserEmail>
      </UserDataContainer>
      <Hr />
      <UserDashboard>
        <Link
          to={"/moje-konto/moje-zamowienia"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Moje zamówienia</UserDashboardItem>
        </Link>
        <Link
          to={"/moje-konto/adres-dostawy"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Adres dostawy</UserDashboardItem>
        </Link>
        <Link
          to={"/koszyk"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Koszyk</UserDashboardItem>
        </Link>
        <Link
          to={"/kontakt"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Kontakt</UserDashboardItem>
        </Link>
        <UserDashboardItem onClick={handleLogout}>Wyloguj</UserDashboardItem>
      </UserDashboard>
      <Hr />
      <UserDataContainer>
        <UserTitle>Admin Panel</UserTitle>
      </UserDataContainer>
      <UserDashboard>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Lista użytkowników</UserDashboardItem>
        </Link>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Zamówienia</UserDashboardItem>
        </Link>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#222",
          }}
        >
          <UserDashboardItem>Produkty</UserDashboardItem>
        </Link>
      </UserDashboard>
    </SideBar>
  );
};

export default AdminSidebar;
