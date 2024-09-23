import Image from "next/image";
import TextField from "@mui/material/Button";
import FieldsForm from "./FieldsForm";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="dynamic-field-form">
      <FieldsForm />
    </div>
  );
}
