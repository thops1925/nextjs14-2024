'use client'
import Profile from '../profile'
import Logo from './Logo'
import Menu from './Menu'

export default function Header () {
  return (
    <header>
      <Logo />
      <Menu />
      <Profile />
    </header>
  )
}
