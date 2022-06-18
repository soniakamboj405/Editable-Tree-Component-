import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  logo: {
    fontWeight: 600,
    color: "black",
    textAlign: "right",
  },
}));

export default function Header() {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>
        <Typography variant="h6" component="h1" className={logo}>
            Editable Tree Menu
        </Typography>
    </Toolbar>;
  };

  return (
    <div>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </div>
  );
}