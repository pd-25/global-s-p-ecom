import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

interface SiteButtonProps extends ButtonProps {
  danger?: boolean;
  sizeVariant?: "sm" | "lg";
}

export const SiteButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "danger" && prop !== "sizeVariant",
})<SiteButtonProps>(({ danger, sizeVariant }) => ({
  textTransform: "none",
  fontWeight: "bold",
  borderRadius: "10px",
  backgroundColor: danger ? "#d32f2f" : "#7FAF0D",
  color: "#fff",
  padding: sizeVariant === "lg" ? "14px 40px" : "10px 30px",
  "&:hover": {
    backgroundColor: danger ? "#9a0007" : "#587a09",
  },
}));