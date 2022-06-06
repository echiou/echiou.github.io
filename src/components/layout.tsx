import * as React from "react";
import "../styling/main.scss";

export default function Layout({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}