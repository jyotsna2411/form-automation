"use client";

import Image from "next/image";
import TextField from "@mui/material/Button";
import FieldsForm from "./FieldsForm";
import React, { useState } from "react";
import { useClient } from "next/client";

export default function Home() {
  return (
    <div className="dynamic-field-form">
      <FieldsForm />
    </div>
  );
}
