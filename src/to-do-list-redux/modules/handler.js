import React from "react";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Fragment } from "react";
import { Avatar } from "@material-ui/core";

export const renderStatus = (status) => {
  switch (status) {
    case 1:
      return (
        <Fragment>
          <HourglassEmptyIcon />
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <AccessAlarmsIcon />
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <CheckBoxOutlinedIcon />
        </Fragment>
      );
    case 4:
      return (
        <Fragment>
          <DeleteForeverOutlinedIcon />
        </Fragment>
      );
    default:
      return <div>Empty</div>;
  }
};

export const renderPriority = (priority) => {
  switch (priority) {
    case 1:
      return <div style={{ color: "red", fontSize: 16 }}>High</div>;
    case 2:
      return <div style={{ color: "blue", fontSize: 16 }}>Normal</div>;
    case 3:
      return <div style={{ color: "green", fontSize: 16 }}>Low</div>;
    default:
      break;
  }
};

export const renderLabel = (arrLabel) => {
  if (Array.isArray(arrLabel) && arrLabel.length > 0) {
    return arrLabel.map((item, index) => {
      let color;
      switch (item) {
        case "FE":
          color = "blue";
          break;
        case "BE":
          color = "yellow";
          break;
        case "FT":
          color = "green";
          break;
        case "DB":
          color = "red";
          break;
        default:
          break;
      }

      return (
        <FiberManualRecordIcon
          key={index}
          style={{ fontWeight: "bold", marginRight: 5, color }}
        />
      );
    });
  }
};

export const renderPeople = (arrPeople) => {
  if (Array.isArray(arrPeople) && arrPeople.length > 0) {
    return arrPeople.map((item, index) => {
      return (
        <Avatar
          style={{ margin: 0 }}
          component="span"
          key={index}
          alt={item}
          src={`./images/${item}.png`}
        />
      );
    });
  }
};

export const findTaskIndex = (arr, id) =>
  arr.findIndex((item) => item.id === id);

// remove diacritics/accents
export const clearAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

//sort task
export function sortTask(arr, by, value) { // A-Z: value: 1, Z-A: value -1
  return arr.sort((a, b) => { // sort thay đổi mảng truyền vào -> nên cần [...arr]
    const x = a[by].toLowerCase(); // by="name" -> obj[by] ~~ obj.name
    const y = b[by].toLowerCase();
    if (x < y) {
      return -value;
    }
    if (x > y) {
      return value;
    }
    return 0;
  });
}