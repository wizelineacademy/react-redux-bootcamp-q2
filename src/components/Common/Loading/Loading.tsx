import "./Loading.css";

import { Box, CircularProgress } from "@mui/material";

import { LoadingProps } from "./LoadingInterfaces";

export const Loading: React.FC<LoadingProps> = ({
  isLoading,
}: LoadingProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};
