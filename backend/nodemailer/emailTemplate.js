export const VERIFICATION_EMAIL_TEMPLATE = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000; max-width: 480px; margin: 0 auto; padding: 20px; text-align: center;">

  <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://gyiktpapyfjjwgcfuhik.supabase.co/storage/v1/object/public/uidsigns_images/authpack.png" alt="AuthPack Logo" style="max-width: 200px;">
  </div>

  <!-- Header -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <h2>Verify your email, {username}!</h2>
  </div>

  <!-- Main Content -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <p>Thank you for signing up for <strong>AuthPack</strong>! Please verify your email with the code below:</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #165ef0;">{verificationCode}</span>
    </div>
    
    <p>This code expires in 15 minutes. If you didn’t sign up, ignore this email.</p>
  </div>

  <!-- Footer -->
  <div style="padding: 20px; font-size: 13px; color: #a9a9a9;">
    <p>This is an automated message. Please do not reply.</p>
  </div>
  
</body>
</html>

`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AuthPack</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000; max-width: 480px; margin: 0 auto; padding: 20px; text-align: center;">

  <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://gyiktpapyfjjwgcfuhik.supabase.co/storage/v1/object/public/uidsigns_images/authpack.png" alt="AuthPack Logo" style="max-width: 200px;">
  </div>

 <div style=" padding: 0px 20px ; font-size: 14px; ">
   <h2>Welcome, {username}!</h2>
  </div>

  <!-- Main Content -->
  <div style=" padding: 0px 20px; font-size: 14px; ">
    <p>Thanks for choosing <strong>AuthPack</strong>! Your account is set up and ready to go.</p>
    <p>For a secure experience, we’ve got robust authentication in place to keep your information safe.</p>
     <p>You can now log in to access your account securely.</p>
  </div>

 <div style=" padding:20px ; font-size: 13px; color: #a9a9a9; ">
   <p>We hope you enjoy using AuthPack as much as we enjoyed building it for you.</p>
  </div>
  
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000; max-width: 480px; margin: 0 auto; padding: 20px; text-align: center;">

  <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://gyiktpapyfjjwgcfuhik.supabase.co/storage/v1/object/public/uidsigns_images/authpack.png" alt="AuthPack Logo" style="max-width: 200px;">
  </div>

  <!-- Header -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <h2>Reset Your Password</h2>
  </div>

  <!-- Main Content -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <p>We received a request to reset your password for your <strong>AuthPack</strong> account. Click the button below to reset your password:</p>
    
    <!-- Reset Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="display: inline-block; padding: 10px 40px; font-size: 16px; color: #fff; background-color: #165ef0; text-decoration: none; border-radius: 5px;">Reset Password</a>
    </div>
    
    <p>If you didn't request a password reset, please ignore this email. The link will expire in 15 minutes.</p>
  </div>

  <!-- Footer -->
  <div style="padding: 20px; font-size: 13px; color: #a9a9a9;">
    <p>This is an automated message. Please do not reply.</p>
  </div>
  
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000; max-width: 480px; margin: 0 auto; padding: 20px; text-align: center;">

  <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://gyiktpapyfjjwgcfuhik.supabase.co/storage/v1/object/public/uidsigns_images/authpack.png" alt="AuthPack Logo" style="max-width: 200px;">
  </div>

  <!-- Header -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <h2>Password Reset Successful!</h2>
  </div>

  <!-- Main Content -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <p>Your password has been successfully reset for your <strong>AuthPack</strong> account.</p>
    <p>You can now log in with your new password. If you didn’t request this change or if you have any issues, please contact support immediately.</p>
  </div>

  <!-- Footer -->
  <div style="padding: 20px; font-size: 13px; color: #a9a9a9;">
    <p>This is an automated message. Please do not reply.</p>
  </div>
  
</body>
</html>
`;

export const RESEND_VERIFICATION_EMAIL_TEMPLATE = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resend Verification Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #000; max-width: 480px; margin: 0 auto; padding: 20px; text-align: center;">

  <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://gyiktpapyfjjwgcfuhik.supabase.co/storage/v1/object/public/uidsigns_images/authpack.png" alt="AuthPack Logo" style="max-width: 200px;">
  </div>

  <!-- Header -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <h2>New Verification Code</h2>
  </div>

  <!-- Main Content -->
  <div style="padding: 0px 20px; font-size: 14px;">
    <p>We noticed you requested a new verification code for <strong>AuthPack</strong>. Please use the code below:</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #165ef0;">{verificationCode}</span>
    </div>
    
    <p>This code expires in 15 minutes. If you did not request this, please ignore this email.</p>
  </div>

  <!-- Footer -->
  <div style="padding: 20px; font-size: 13px; color: #a9a9a9;">
    <p>This is an automated message. Please do not reply.</p>
  </div>
  
</body>
</html>
`;
