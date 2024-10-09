import { transporter } from "./nodemailer.js";

import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  RESEND_VERIFICATION_EMAIL_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplate.js";

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const sendVerificationEmail = async (
  email,
  username,
  verificationCode
) => {
  transporter.sendMail({
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ).replace("{username}", capitalizeFirstLetter(username)),
  });
};

export const sendWelcomeEmail = (email, username) => {
  transporter.sendMail({
    to: email,
    subject: "Welcome from AuthPack",
    html: WELCOME_EMAIL_TEMPLATE.replace(
      "{username}",
      capitalizeFirstLetter(username)
    ),
  });
};

export const sendPasswordResetEmail = (email, resetURL) => {
  transporter.sendMail({
    to: email,
    subject: "Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  });
};

export const sendResetSuccessEmail = (email) => {
  transporter.sendMail({
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  });
};

export const resendVerificationEmail = (email, verificationCode) => {
  transporter.sendMail({
    to: email,
    subject: "Verify your email",
    html: RESEND_VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ),
  });
};
