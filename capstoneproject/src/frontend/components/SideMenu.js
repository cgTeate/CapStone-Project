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
    <MenuItem style={mystyle2} icon={<Icon as={HomeIcon}/>} command='⌘H'>Home</MenuItem>
    </Link>
    <Link href="/KicksPage">
    <MenuItem style={mystyle2} command='⌘K'>Kicks</MenuItem>
    </Link>
    <Link href="/ApparelPage">
    <MenuItem style={mystyle2} command='⌘A'>Apparel</MenuItem>
    </Link>
    <Link href="/">
    <MenuItem style={mystyle2} command='⌘V'>Vintage</MenuItem>
    </Link>
    <Link href="/">
    <MenuItem style={mystyle2} command='⌘B'>Accessories</MenuItem>
    </Link>
    <Link href="/Cart">
    <MenuItem style={mystyle2} command='⌘C'>Cart</MenuItem>
    </Link>
    <Link href="/FAQSPage">
    <MenuItem style={mystyle2} command='⌘N'>FAQS</MenuItem>
    </Link>
    <Link href="/RegistrationPage">
    <MenuItem style={mystyle2} command='⌘R'>Register</MenuItem>
    </Link>
    <Link href="/LoginPage">
    <MenuItem style={mystyle2} command='⌘L'>Log In</MenuItem>
    </Link>
  </MenuList>
</Menu>
    </div>
  )
}
