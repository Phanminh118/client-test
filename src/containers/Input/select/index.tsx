import { InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { getConstantValue } from "typescript";

interface Props {
  input: { name?: string; title?: string; id?: number }[];
  onSelect?: (index: number) => void;
  label?: string;
  disable?: boolean;
  value?: number;
  flex?: boolean;
}

const useStyles = makeStyles((theme) => ({
  select: {
    margin: theme.spacing(1),
    marginBottom: 0,
    marginTop: "-3px",
  },
  selectLabel: {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
    width: "100px",
    lineHeight: "8px",
    marginTop: "10px",
    textAlign: "left",
  },
  selectFlex: {
    margin: theme.spacing(1),
    display: "flex",
  },
}));

export const InputSelect = (props: Props) => {
  const { input, onSelect, value } = props;
  const onChange = (e: any) => {
    if (onSelect) onSelect(e.target.value);
  };
  const getValue = () => {
    if (!input) return 0;
    if (input.find((i) => i.id === value)) return value;
    else {
      return -1;
    }
  };

  const classes = useStyles();
  return (
    <div className={props.flex ? classes.selectFlex : classes.select}>
      <InputLabel
        id="demo-simple-select-helper-label"
        className={classes.selectLabel}
      >
        {props.label || "label"}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={getValue()}
        onChange={onChange}
        fullWidth
        disabled={props.disable}
      >
        {input
          ? input.map((item, index) => (
              <MenuItem value={item.id || index}>
                {item.name || item.title}
              </MenuItem>
            ))
          : null}
      </Select>
    </div>
  );
};
