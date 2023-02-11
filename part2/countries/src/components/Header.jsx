function Header({ title }) {
  return (
    <header className="flex justify-center items-center p-8 bg-orange-300">
      <h1 className="text-6xl font-bold">{title}</h1>
    </header>
  )
}

export default Header