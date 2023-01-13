import { Divider, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { excursionsList } from "../../assets/excursionsList";
import { TextPrimary } from "../../styles/Text/TextPrimary";
import { CardExcurio } from "./CardExcursio";

export const Excursions = () => {
  const [arrayList, setArrayList] = useState([]);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (arrayList.length >= excursionsList.lenght) return;
    const newList = excursionsList.slice(0, counter);
    setArrayList(newList);

    // eslint-disable-next-line
  }, [counter]);

  return (
    <Grid mt={2} container justifyContent="center">
      <Grid item xs={12}>
        <TextPrimary textAlign="center" fontSize="4vw">
          Darreres Excursions
        </TextPrimary>
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "center" }} xs={12}>
        <Divider sx={{ width: "10vw", mb: 2 }} />
      </Grid>
      <Grid item xs={4}>
        <TextPrimary color="grey" textAlign="center" fontSize="1.2vw">
          Excursions i viatges fets a mida per a que pogueu gaudir de les
          millors experiències
        </TextPrimary>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        sx={{ width: "100vw", mt: 2 }}
      >
        {arrayList.map((excursio, i) => (
          <CardExcurio key={i} {...excursio} />
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", m: 3 }}
      >
        {arrayList >= excursionsList ? (
          <TextPrimary>No hi ha més excursions.</TextPrimary>
        ) : (
          <Button
            onClick={() => setCounter((prev) => prev + 4)}
            variant="outlined"
            color="primary"
            size="large"
          >
            VEURE MES...
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
