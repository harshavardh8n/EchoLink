import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://ec2-13-235-71-155.ap-south-1.compute.amazonaws.com:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
