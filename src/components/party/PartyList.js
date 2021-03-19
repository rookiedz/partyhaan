import React from "react";
import PartyListItem from "./PartyListItem";

export default function PartyList({ parties }) {
  return (
    <>
      {parties && (
        <div className="flex flex-wrap sm:space-x-3 px-3">
          {parties.map((party) => (
            <PartyListItem
              party={party}
              onClickJoin={() => console.log(`join`)}
            />
          ))}
        </div>
      )}
    </>
  );
}
