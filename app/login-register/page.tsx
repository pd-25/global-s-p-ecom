"use client";

import { useState } from "react";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SiteButton } from "@/components/SiteButton";

export default function AuthPage() {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <div className="bg-[#f4f6f8] min-h-screen py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* LOGIN */}
        <div className="bg-white border border-gray-200 hover:border-[#054934] rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-semibold">Login</h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm font-medium">
                Username or email address *
              </label>
              <TextField
                fullWidth
                placeholder="First Name"
                size="small"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <TextField
                  fullWidth
                  type={showPass1 ? "text" : "password"}
                  size="small"
                />
                <IconButton
                  onClick={() => setShowPass1(!showPass1)}
                  className="absolute! right-2 top-1/2 -translate-y-1/2"
                >
                  {showPass1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <SiteButton
                variant="contained"
              >
                Log in
              </SiteButton>

              <div className="flex items-center gap-1 text-sm">
                <Checkbox size="small" />
                Remember me
              </div>
            </div>

            <p className="text-red-500 text-sm cursor-pointer">
              Forgot your password?
            </p>

          </div>
        </div>

        {/* REGISTER */}
        <div className="bg-white border border-gray-200 hover:border-[#054934] rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-semibold">Register</h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm font-medium">Username *</label>
              <TextField
                fullWidth
                placeholder="Write a username"
                size="small"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email address *</label>
              <TextField
                fullWidth
                placeholder="Enter Email Address"
                size="small"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password *</label>
              <div className="relative">
                <TextField
                  fullWidth
                  type={showPass2 ? "text" : "password"}
                  size="small"
                />
                <IconButton
                  onClick={() => setShowPass2(!showPass2)}
                  className="absolute! right-2 top-1/2 -translate-y-1/2"
                >
                  {showPass2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Your personal data will be used to process your order,
              support your experience throughout this website,
              and for other purposes described in our privacy policy.
            </p>

            <SiteButton
              variant="contained"
            >
              Register
            </SiteButton>

          </div>
        </div>

      </div>
    </div>
  );
}