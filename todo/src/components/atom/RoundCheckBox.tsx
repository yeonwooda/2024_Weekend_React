import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export type RoundCheckBoxPorps = {
  contents?: string;
};

export default function CheckboxLabels({ contents }: RoundCheckBoxPorps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={contents}
      />
    </FormGroup>
  );
}
