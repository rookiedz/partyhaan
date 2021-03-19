import React from "react";

export default function PartyListItem({ party, onClickJoin }) {
  return (
    <>
      <div className="flex flex-col w-1/2 px-3 py-2 my-2 space-y-3 shadow-md rounded-md sm:min-w-party sm:max-w-party">
        <div className="felx">
          <img src={party.image} alt="" />
        </div>
        <div className="flex">{party.name}</div>
        <div className="flex border-t pt-3">
          <div className="flex flex-grow items-center">
            {party.join}/{party.total}
          </div>
          <button
            className="btn bg-salmon text-white"
            onClick={() => onClickJoin(party)}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
}
