import styled, { keyframes } from "styled-components";
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
  return (
    <SideBar>
      <UserDataContainer>
        <UserTitle>Hej "Name"!</UserTitle>
        <UserEmail>nyjepl@gmail.com</UserEmail>
      </UserDataContainer>
      <Hr />
      <UserDashboard>
        <UserDashboardItem>Moje zamówienia</UserDashboardItem>
        <UserDashboardItem>Adres dostawy</UserDashboardItem>
        <UserDashboardItem>Koszyk</UserDashboardItem>
        <UserDashboardItem>Kontakt</UserDashboardItem>
        <UserDashboardItem>Wyloguj</UserDashboardItem>
      </UserDashboard>
    </SideBar>
  );
};

export default AdminSidebar;
