import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          {" "}
          {/*bg-base ,navabr these classes are from daisy ui */}
          <Link href="/" className="btn btn-ghost text-lg">
            E-commerce
          </Link>
          <ul>
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
