import React from "react";
import { Typography, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import FullPageContainer from "../FullPageContainer/FullPageContainer";
import { Link } from "react-router-dom";
import { PageNames } from "../../utils/pageNames";

const ErrorAdvice: React.FC = () => {
  return (
    <FullPageContainer>
      <ErrorIcon
        sx={{ fontSize: 100, color: "error.main", marginBottom: 3 }}
        aria-label="error-icon"
      />
      <Typography variant="h1" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" mb={4}>
        Please try again later reloading the page.
      </Typography>
      <Link to={PageNames.HOME}>
        <Button variant="contained" color="primary" aria-label="go-home-button">
          Go Home
        </Button>
      </Link>
    </FullPageContainer>
  );
};

export default ErrorAdvice;
