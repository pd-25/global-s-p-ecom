"use client"

import { useState } from "react"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import Icon from "@/components/ui/icon/Icon"
import styles from "./Header.module.css"
import Image from "next/image"
import logo from "@/public/global-sp-logo.svg"
import { navLinks } from "@/lib/constants"
import { SiteButton } from "../SiteButton"
import { FaRegUser, FaSearch } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }



  const drawer = (
    <Box sx={{ p: 3, backgroundColor: "#054934", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Image src={logo} alt="logo" width={300} height={40} />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "#ffffff" }}
          aria-label="close menu"
        >
          <Icon name="close" width={24} height={24} />
        </IconButton>
      </Box>
      <Stack direction="column" spacing={2}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={handleDrawerToggle}
          >
            {link.name}
          </Link>
        ))}

        <Button variant="contained" color="success" component={Link} href="/connect">
          Connect with us
        </Button>
      </Stack>
    </Box>
  )

  return (
    <Box component="header" className={styles.header}>
      <div style={{ backgroundColor: "#215847" }}>
        <Container  sx={{ maxWidth: "95% !important", padding: "0 15px !important" }}>
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="flex items-center justify-between flex-wrap gap-8">
              <div className="flex items-center gap-2.5">
                <span className="text-base font-medium text-white hidden md:flex">
                  Until the end of the sale:
                </span>
                <span className="text-base font-medium text-white flex md:hidden">
                  Sale end:
                </span>

                <div className="flex items-center gap-2.5" id="countdown25">
                  <div className="flex items-center gap-1 text-white">
                    <strong className="text-base font-semibold days">628</strong>
                    <span className="text-xs">Days</span>
                  </div>

                  <div className="flex items-center gap-1 text-white">
                    <strong className="text-base font-semibold hours">7</strong>
                    <span className="text-xs">Hours</span>
                  </div>

                  <div className="flex items-center gap-1 text-white">
                    <strong className="text-base font-semibold minutes">46</strong>
                    <span className="text-xs">Minutes</span>
                  </div>

                  <div className="flex items-center gap-1 text-white">
                    <strong className="text-base font-semibold seconds">26</strong>
                    <span className="text-xs">Sec.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container sx={{ maxWidth: "95% !important", padding: "0 15px !important" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: { xs: 160, md: 300 },
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src={logo}
                alt="logo"
                width={300}
                height={40}
                className="logo"
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.navLink}
                style={{ fontWeight: 700, fontSize: "15px" }}
              >
                {link.name}
              </Link>
            ))}
            <SiteButton variant="contained" component={Link} href="/connect" className="px-20" sx={{  }}>
              Connect with us
            </SiteButton>

            <Box sx={{ display: "flex", gap: "5px" }}>
              <IconButton sx={{ color: "#ffffff" }} aria-label="notifications">
                <Icon name="notification" width={30} height={30} />
              </IconButton>
              <IconButton sx={{ color: "#ffffff" }} aria-label="user profile">
                <Icon name="user" width={30} height={30} />
              </IconButton>
              <IconButton sx={{ color: "#ffffff" }} aria-label="language">
                <Icon name="translate" width={30} height={30} />
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Icons and Menu Button */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: { xs: "0", md: "10px" },
            }}
          >
            <IconButton sx={{ color: "#ffffff" }} aria-label="notifications">
              <Icon name="notification" width={24} height={24} />
            </IconButton>
            <IconButton sx={{ color: "#ffffff" }} aria-label="user profile">
              <Icon name="user" width={24} height={24} />
            </IconButton>
            <IconButton sx={{ color: "#ffffff" }} aria-label="language">
              <Icon name="translate" width={24} height={24} />
            </IconButton>
            <IconButton
              sx={{ color: "#ffffff" }}
              onClick={handleDrawerToggle}
              aria-label="open menu"
            >
              <Icon name="menu" width={24} height={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <div className="bg-white">
        <Container sx={{ maxWidth: "95% !important", padding: "0 15px !important" }}>
          <div className="flex items-center justify-between gap-6 px-4 py-4">

          
            <div className="flex flex-1 max-w-3xl border rounded-lg overflow-hidden bg-white  border-gray-200 p-2">
        
              <button className="cursor-pointer px-4 text-sm text-gray-700  border-r border-r-gray-200 bg-white hover:bg-gray-100">
                All categories ▾
              </button>
      
              <input
                type="text"
                placeholder="Search for products, categories or brands..."
                className="flex-1 px-4 py-2 outline-none text-sm text-black"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />

              <SiteButton>
                <i className="pt-2 pb-2">
                  <FaSearch className="text-white"/>
                </i>
              </SiteButton>
            </div>
        
            <div className="flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-1 cursor-pointer hover:text-teal-700">
                <FaRegUser /> <span>Profile</span>
              </div>

              <div className="flex items-center gap-1 cursor-pointer hover:text-teal-700 relative">
                <FaCartShopping /> <span>Cart</span>
                <span className="absolute -top-2 -right-3 bg-teal-700 text-white text-xs rounded-full px-1">
                  2
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>



      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "80%", sm: 400 },
            backgroundColor: "#054934",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
