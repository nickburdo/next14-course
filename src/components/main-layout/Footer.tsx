export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto p-8 text-center">
        Created by &copy; Nick Burdo {new Date().getFullYear()}
      </div>
    </footer>
  );
}
