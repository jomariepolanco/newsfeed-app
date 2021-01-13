import { Button, FormControl, FormLabel, RadioGroup, Grid, Paper, makeStyles, createStyles, Theme} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import CheckBoxes from "./CheckBoxes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

interface Props {
  setCategory: (value: string) => void;
}

const SearchForm: React.FC<Props> = ({ setCategory }) => {
  const [value, setValue] = useState("All");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const renderCheckBoxes = () => {
    return [
      "Business",
      "Entertainment",
      "General",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ].map((category) => <CheckBoxes key={category}category={category} />);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    setCategory(value);
  };

  const classes = useStyles()
  return (
    <>
    <Grid item md={12}>
        <Paper className={classes.paper}>
      <form onSubmit={submitHandler}>
        <FormControl component="fieldset">
          <FormLabel
            style={{ color: "#6e22b4", fontWeight: "bolder" }}
            component="legend"
          >
            Choose a Category
          </FormLabel>
          <RadioGroup
            row
            value={value}
            onChange={changeHandler}
            aria-label="category"
          >
            {renderCheckBoxes()}
          </RadioGroup>
          <Button
            size={"large"}
            style={{ color: "#ffffff", backgroundColor: "#9147ff" }}
            type="submit"
            variant="outlined"
          >
            Submit
          </Button>
        </FormControl>
      </form>
      </Paper>
    </Grid>
    </>
  );
};

export default SearchForm;
