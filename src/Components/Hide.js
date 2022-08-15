import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";


const Hide = () => {
  return (
    <div className={styles.hidden}>
      <FormControlLabel
        control={
          <Checkbox
            edge="end"
            style={{
              color: "#008594",
              "&$checked": {
                color: "#008594",
              },
            }}
          />
        }
        label=" Hide completed"
      />
    </div>
  );
};

export default Hide;
