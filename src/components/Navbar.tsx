import dayjs from "dayjs";
import { navIcons, navLinks } from "~/constants";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className="font-bold">Bohdan's Portfolio</p>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};
