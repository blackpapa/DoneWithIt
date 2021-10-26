import React from "react";

export const navigationRef = React.createRef<any>();

const navigate = (name: any, params?: any) =>
  navigationRef.current?.navigate(name, params);

const getRootState = () => navigationRef.current?.getRootState();

export default {
  navigate,
  getRootState,
};
