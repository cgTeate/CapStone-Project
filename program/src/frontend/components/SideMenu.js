import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Icon
  } from '@chakra-ui/react'
  import {HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
  import { HomeIcon, } from "@heroicons/react/24/outline";
  import Link from "next/link";

export default function SideMenu() {
  const mystyle2 = {
    color: "black",
    //backgroundColor: "Gray",
    padding: "1px",
    fontFamily: "Garamond",
    fontSize: "16px",
    // fontWeight: "bold",
  };
  return (
    <div className='bg-blue-400'>
        <Menu>
  <MenuButton
    as={IconButton}
    // aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <Link href="/">
    <MenuItem style={mystyle2} icon={<Icon as={HomeIcon}/>}>Home</MenuItem>
    </Link>
    <Link href="/kicks/KicksPage">
    <MenuItem style={mystyle2}>Kicks</MenuItem>
    </Link>
    <Link href="/apparel/ApparelPage">
    <MenuItem style={mystyle2}>Apparel</MenuItem>
    </Link>
    <Link href="/">
    <MenuItem style={mystyle2}>Vintage</MenuItem>
    </Link>
    <Link href="/">
    <MenuItem style={mystyle2}>Accessories</MenuItem>
    </Link>
    <Link href="/cart/Cart">
    <MenuItem style={mystyle2}>Cart</MenuItem>
    </Link>
    <Link href="/faqs/FAQSPage">
    <MenuItem style={mystyle2}>FAQS</MenuItem>
    </Link>
    <Link href="/registration/RegistrationPage">
    <MenuItem style={mystyle2}>Register</MenuItem>
    </Link>
    <Link href="/login/LoginPage">
    <MenuItem style={mystyle2}>Log In</MenuItem>
    </Link>
  </MenuList>
</Menu>
    </div>
  )
}
