import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ExposurePlus1RoundedIcon from "@material-ui/icons/ExposurePlus1Rounded";
import FlareRoundedIcon from '@material-ui/icons/FlareRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const WelcomeCard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Good to see you.
      </Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          endIcon={<ExposurePlus1RoundedIcon />}
        >
          Come on in.
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCard;
