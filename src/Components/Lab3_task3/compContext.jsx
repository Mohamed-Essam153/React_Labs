import React, { createContext, Component } from 'react';

const compContext = createContext();

const userProvider = compContext.Provider;
const userConsumer = compContext.Consumer;

export { userProvider, userConsumer, compContext };