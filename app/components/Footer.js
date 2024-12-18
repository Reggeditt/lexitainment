export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Lexitainment. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-dark-red">Privacy Policy</a>
            <a href="#" className="hover:text-dark-red">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
