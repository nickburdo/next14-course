"use client";

type Props = {
  error?: Error;
};

export default function Error({ error }: Props) {
  return (
    <>
      <h1>Oops! Something went wrong</h1>
      <p>{error?.message}</p>
    </>
  );
}
