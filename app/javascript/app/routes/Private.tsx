import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useUserStore } from "@stores/hooks";

interface Props {
  children: ReactNode;
}

const Private = ({ children }: Props) => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default Private;
