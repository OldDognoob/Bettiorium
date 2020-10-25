import React from "react";

export default function Button({ type, children, loading }) {
  return <button type={type}>{loading ? "Loading ..." : children}</button>;
}
