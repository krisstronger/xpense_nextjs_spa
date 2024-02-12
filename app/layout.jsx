import "@styles/global.css";

export const metadata = {
  title: "Xpense",
  description: "Xpense APP",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div className="">
          <div className=""></div>
        </div>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
