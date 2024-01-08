"use client";

// Checking if counter value is persisting
// in this route also
import { useSelector, selectCount } from "@/lib/redux";

export default function VerifyPage() {
  const count = useSelector(selectCount);
  return (
    <>
      <h1>Verify page</h1>
      <p>Count: {count}</p>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
    </>
  )
}
