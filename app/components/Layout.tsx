import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <Nav />
      </div>
      <main style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1rem` }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
