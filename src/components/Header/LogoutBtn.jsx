import React from "react";
import { useDispatch } from "react-redux";
import authService, { AuthService } from "@/appwrite/auth";
import { logout } from "@/store/authSlice";
import { Button } from "../ui/button";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return <Button>Logout</Button>;
}

export default LogoutBtn;
