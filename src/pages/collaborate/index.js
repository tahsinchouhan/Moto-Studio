import React from "react";
import CollaborateHeader from "./collaborateHeader";
import CollaborateForm from "./CollaborateForm";
import CollaborateForestProduce from "./CollaborateForestProduce";
import PartnershipOpp from "./PartnershipOpp";

export default function Collaborate() {
  return (
    <>
      <CollaborateHeader />
      <PartnershipOpp />
      <CollaborateForm />
      <CollaborateForestProduce />
    </>
  );
}
