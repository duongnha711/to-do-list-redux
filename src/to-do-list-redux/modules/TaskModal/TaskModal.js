import React, { useState, Fragment } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Alert } from "@material-ui/lab";
import { secondaryColor } from "./../../theme";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  FormControl,
  Select,
  Typography,
  Checkbox,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "none",
    },
  },
  colorLabel: {
    color: secondaryColor,
    marginTop: 10,
  },
  checkboxTask: {
    padding: "0 5px",
  },
  labelTask: {
    marginRight: 10,
  },
});

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  //formik
  const Schema = Yup.object().shape({
    nameTask: Yup.string().required("Task name no empty"),
    priorityTask: Yup.string()
      .oneOf(["1", "2", "3"], "Please choose one priority")
      .required("Please choose one priority"),
    personTask: Yup.array().required("Please choose at least one person"),
    labelTask: Yup.array().required("Please choose at least one label"),
  });

  const TextInput = ({ field, form, ...props }) => {
    return (
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        {...field}
        {...props}
      />
    );
  };

  const SelectInput = ({ field, form, ...props }) => {
    return (
      <FormControl size="small" fullWidth>
        <Select variant="outlined" native {...field} {...props}>
          {props.children}
        </Select>
      </FormControl>
    );
  };

  const CheckBoxInput = ({ field, form, ...props }) => {
    return (
      <Checkbox
        className={classes.checkboxTask}
        size="small"
        color="primary"
        {...field}
        {...props}
      />
    );
  };
  const MyAlert = ({ children, ...props }) => {
    return (
      <Alert {...props} severity="error">
        {children}
      </Alert>
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {/* button click */}
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        fullWidth
      >
        <AddIcon fontSize="small" /> Add Task
      </Button>

      {/* modal */}
      <Dialog className={classes.dialog} open={open} onClose={handleClose}>
        <DialogContent style={{ width: 700 }}>
          <Typography variant="h2">Add Task</Typography>
          <Formik
            initialValues={{
              nameTask: "",
              priorityTask: "",
              labelTask: [],
              personTask: [],
            }}
            validationSchema={Schema}
            onSubmit={(values) => {
              //truyen value di
              console.log("values", values);
              setOpen(false);
            }}
          >
            {({ isValid, touched }) => {
              if (!touched.name || !touched.status) {
                isValid = false;
              }

              return (
                <Form>
                  <div className={classes.colorLabel}>Task Name</div>
                  <Field
                    style={{ margin: "4px 0" }}
                    placeholder="Enter your Task"
                    component={TextInput}
                    name="nameTask"
                  />
                  <ErrorMessage
                    render={(msg) => <MyAlert>{msg}</MyAlert>}
                    name="nameTask"
                  />

                  <div className={classes.colorLabel}>Priority</div>
                  <Field
                    style={{ margin: "4px 0" }}
                    component={SelectInput}
                    name="priorityTask"
                  >
                    <option value={0}>Choose Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Normal</option>
                    <option value={3}>Low</option>
                  </Field>
                  <ErrorMessage
                    render={(msg) => <MyAlert>{msg}</MyAlert>}
                    name="priorityTask"
                  />
                  {/* check box in chart */}
                  <div className={classes.colorLabel}>Person in chart</div>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="personTask"
                      value="luffy"
                    />
                    Luffy
                  </label>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="personTask"
                      value="zoro"
                    />
                    Zoro
                  </label>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="personTask"
                      value="sanji"
                    />
                    Sanji
                  </label>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="personTask"
                      value="chopper"
                    />
                    Chopper
                  </label>
                  <ErrorMessage
                    render={(msg) => <MyAlert>{msg}</MyAlert>}
                    name="personTask"
                  />

                  {/* check box label */}
                  <div className={classes.colorLabel}>Label</div>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="labelTask"
                      value="FE"
                    />
                    Front-end
                  </label>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="labelTask"
                      value="BE"
                    />
                    Back-end
                  </label>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="labelTask"
                      value="FT"
                    />
                    Full-stack
                  </label>
                  <label className={classes.labelTask}>
                    <Field
                      component={CheckBoxInput}
                      name="labelTask"
                      value="DB"
                    />
                    Database
                  </label>
                  <ErrorMessage
                    render={(msg) => <MyAlert>{msg}</MyAlert>}
                    name="labelTask"
                  />

                  {/* button */}
                  <DialogActions>
                    <Button
                      // disabled={!isValid}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      <AddIcon fontSize="small" /> Save
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleClose}
                      color="secondary"
                      autoFocus
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
