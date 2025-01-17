import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { uiChanged } from "../../store/ui";

const Logo = () => {
  const dispatch = useDispatch();
  const { isMobile, sideMenu } = useSelector(({ ui }) => ui);

  function handleClick() {
    batch(() => {
      dispatch(
        uiChanged({
          prop: "sideMenu",
          att: "open",
          val: !sideMenu.open,
        })
      );
      dispatch(
        uiChanged({
          prop: "sideMenu",
          att: "width",
          val: !sideMenu.open ? 250 : 60,
        })
      );
    });
  }
  return (
    <Box display="flex" justifyContent="center">
      <Typography
        variant="h5"
        color="white"
        sx={{
          zIndex: -10,
          fontSize: 34,
          mr: sideMenu.open && 0.5,
          width: sideMenu.open ? "100%" : 0,
          opacity: sideMenu.open ? 1 : 0,
          visibility: sideMenu.open ? "initial" : "hidden",
          transition: "all 0.5s",
        }}>
        <sup>
          <ins style={{ fontWeight: 200, fontSize: 22 }}>Algo</ins>
        </sup>
        <strong style={{ fontSize: 34 }}>Vision</strong>
      </Typography>
      <IconButton onClick={handleClick} sx={{ p: 0 }}>
        <FitbitIcon sx={{ color: "white", fontSize: !isMobile ? 50 : 40 }} />
      </IconButton>
    </Box>
  );
};

export default Logo;
