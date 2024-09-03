function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 w-11/12 bg-sky-400 text-white py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-xl font-bold">Diego Alarcon Inturias</h2>
          <p className="text-sm text-gray-800">(Raikonif)</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm">WhatsApp: +591 63142527</p>
          <p className="text-sm mb-4">E-mail: raikonif@gmail.com</p>
          <p className="text-sm">
            <a href="https://github.com/Raikonif" target="_blank" rel="noopener noreferrer" className="mt-2 cursor-pointer font-bold border rounded-lg p-2">Github: Raikonif</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
