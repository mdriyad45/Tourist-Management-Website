import React, { useContext, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(user);
  const handleLogout = () => {
    console.log('dfs');
    logOut()
    .then(()=>{alert('sign out successfully')})
    .catch(err => alert(err))
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">TRAVOL</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          <NavbarBrand>
            <p className="font-bold text-inherit">TRAVOL</p>
          </NavbarBrand>
          <NavbarItem>
            <Link className="hover:font-semibold" color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:font-semibold"
              color="foreground"
              href="/alltouristspots"
            >
              All Tourist Spots
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:font-semibold"
              color="foreground"
              href="/addtouristsportpage"
            >
              Add Tourist Spot
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:font-semibold"
              color="foreground"
              href="/myList"
            >
              My List
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {
            !user ? <NavbarItem className="hidden lg:flex">
            <Link className="hover:font-semibold" href="/signin">
              Login
            </Link>
          </NavbarItem> : <></>
          }
          <NavbarItem className="hidden lg:flex">
            {user ? (
              <Button
                className="hover:font-semibold"
                as={Link}
                color="warning"
                href="/signup"
                variant="flat"
                onPress={handleLogout}
              >
                LogOut
              </Button>
            ) : (
              <></>
            )}
          </NavbarItem>
          {
            !user ? <NavbarItem>
            <Button
              className="hover:font-semibold"
              as={Link}
              color="warning"
              href="/signup"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem> : <></>
          }
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="hover:font-semibold" href="/" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="hover:font-semibold"
              href="/alltouristspots"
              size="lg"
            >
              All Tourist Spots
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="hover:font-semibold"
              href="/addtouristsportpage"
              size="lg"
            >
              Add Tourist Spot
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="hover:font-semibold" href="/myList" size="lg">
              My List
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
