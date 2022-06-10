import React from "react";
import { render } from "react-dom";
import { types, getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react";

const Address = types.model({
  street: types.optional(types.string, ""),
  city: types.optional(types.string, ""),
  state: types.optional(types.string, ""),
  zip: types.optional(types.string, "")
});

const HomeValue = types.model("HomeValue", {
  currency: types.maybeNull(types.string, ""),
  amount: types.maybeNull(types.string, "")
});

export const PropertyValue = types.model("PropertyValue", {
  id: types.maybeNull(types.number),
  address: types.optional(Address, {}),
  homeValue: types.optional(HomeValue, {}),
  accountType: types.maybeNull(types.string),
  accountName: types.maybeNull(types.string),
  nickName: types.maybeNull(types.string),
  includeInNetWorth: types.maybeNull(types.string),
  valuationType: types.maybeNull(types.string),
  memo: types.maybeNull(types.string)
});

const property = PropertyValue.create({
  id: 123456,
  address: {
    street: "123 Willow St",
    city: "New York",
    state: "NY",
    zip: "10010"
  },
  homeValue: { currency: "USD", amount: "430200.0" },
  accountType: "REAL_ESTATE",
  accountName: "NO NAME",
  nickName: "NO NICK NAME",
  includeInNetWorth: "FALSE",
  valuationType: "SYSTEM",
  memo: ""
});

console.log("property:", getSnapshot(property));

render(<div />, document.getElementById("root"));
