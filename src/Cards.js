import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// importing buttons to the card


// Import the local image
import Images from "./images/image";

export default function ActionAreaCard() {
  return (
    <CardActionArea
      href="https://www.instagram.com/naveen.15.00/"
      target="_blank"
      sx={{
        display: "flex",
        alignItems: "center", // Center items vertically
        flexDirection: { xs: "column", sm: "row" }, // Stack columns on mobile, side-by-side on larger screens
        gap: 2, // Space between CardMedia and CardContent
        padding: 2, // Padding around the CardActionArea
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={Images.img1} // Replace with your image import path
        alt="Item 1"
        sx={{
          borderRadius: "50%", // Make the image circular
          width: 140, // Set width to maintain aspect ratio
          height: 140, // Set height to maintain aspect ratio
          objectFit: "cover", // Ensure the image covers the circular area
          border: "4px solid #ffffff", // Optional: Add a white border around the image
        }}
      />
      <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: 16 }}
        >
          {/* Add your content here */}

          Oneplus Nord CE 4 is here - A New Competitor ! and A mid-range flagship?
          oneplus nord ce 4 | oneplus nord ce 4 review.This video is all about the oneplus nord CE 4 mobile review.
        </Typography>
      </CardContent>
    </CardActionArea>
  );
}
