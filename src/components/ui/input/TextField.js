import React from "react";

export default function TextField({
  type,
  name,
  form: { register },
  autoFocus,
}) {
  return (
    <>
      <div className="flex py-2 border border-border rounded-md">
        <input
          name={name}
          type={type ? type : "text"}
          className="flex px-3 w-full"
          ref={register}
          autoFocus={autoFocus}
        />
      </div>
    </>
  );
}
