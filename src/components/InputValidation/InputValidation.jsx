import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  jobTitle: z.string().trim().nonempty({ message: "Job title is required" }),
  jobType: z.string().trim().nonempty({ message: "Job type is required" }),
  email: z.string().trim().nonempty("Email is required").email(),
  radius: z.coerce
    .number({
      required_error: "Radius is required and must be a positive number",
    })
    .int()
    .min(0),
  location: z.string().trim().nonempty("Please choose a location"),
});

const InputValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      jobTitle: "",
      jobType: "",
      radius: null,
      email: "",
      location: "",
    },
  });

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField
          name="jobTitle"
          id="jobTitle"
          placeholder="Job Title, Company, or Keywords"
          sx={{ width: "50%" }}
          {...register("jobTitle")}
          helperText={errors.jobTitle?.message}
        />
        <TextField
          name="jobType"
          id="jobType"
          placeholder="Job Type"
          sx={{ width: "50%" }}
          {...register("jobType")}
          helperText={errors.jobType?.message}
        />
        <TextField
          name="radius"
          id="radius"
          type="number"
          placeholder="Enter a Number"
          sx={{ width: "50%" }}
          {...register("radius")}
          helperText={errors.radius?.message}
        />

        <TextField
          name="email"
          id="email"
          placeholder="Type Your Email"
          sx={{ width: "50%" }}
          {...register("email")}
          helperText={errors.email?.message}
        />
        <TextField
          name="location"
          id="location"
          placeholder="Choose your location"
          sx={{ width: "50%" }}
          {...register("location")}
          helperText={errors.location?.message}
        />
        <Button type="submit" variant="contained" sx={{ width: "50%" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default InputValidation;
