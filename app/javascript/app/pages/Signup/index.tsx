import React, { useState } from "react";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/system";
import { observer } from "mobx-react-lite";
import PhoneField, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { useUserStore } from "@app/stores/hooks";
import { EMAIL_REGEX } from "@app/lib/constants";
import { PhoneNumberInput } from "@components";

const PhoneInput = styled(PhoneField)`
  & .PhoneInputCountryIcon {
    box-shadow: none;
    background-color: transparent;

    img {
      border-radius: 8px;
    }
  }
`;

export type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Signup = () => {
  const { user, signup } = useUserStore();
  const [phone, setPhone] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => signup(data);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          sx={{ mt: 1 }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 1,
                message: "First name must be at least 1 character long",
              },
            })}
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            variant="filled"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          <TextField
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 1,
                message: "Last name must be at least 1 character long",
              },
            })}
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            autoFocus
            variant="filled"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
          <PhoneInput
            inputComponent={PhoneNumberInput}
            defaultCountry="US"
            {...register("phone", {
              required: "Phone number is required",
              validate: (input) => {
                return isValidPhoneNumber(input) || "Invalid phone number";
              },
            })}
            style={{ "& .PhoneInputCountryIcon": { boxShadow: "none" } }}
            international
            withCountryCallingCode
            value={phone}
            onChange={(number) => setPhone(number || "")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            variant="filled"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            variant="filled"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            {...register("passwordConfirmation", {
              required: "Password confirmation is required",
              minLength: {
                value: 6,
                message:
                  "Password confirmation must be at least 6 characters long",
              },
            })}
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Password Confirmation"
            type="password"
            id="passwordConfirmation"
            variant="filled"
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                underline="hover"
              >
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default observer(Signup);
