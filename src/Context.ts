import React from "react";

type Value = { x: "foo" };

export const context = React.createContext<Value | null>(null);

export function useMyContext(): Value {
	const value = React.useContext(context);
	if (!value) throw new Error("MyContext not available here");
	return value;
}

export const MyContextProvider = context.Provider;
