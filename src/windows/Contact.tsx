import { WindowWrapper } from "~/hoc/WindowWrapper";
import { socials } from "~/constants";
import { WindowControls } from "~/components/WindowControls";

export const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="images/avatar.jpg"
          alt="Bohdan"
          className="w-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>Got an idea? Let's make it real!</p>
        <p>Send me a message</p>
        <p>
          <a
            href="mailto:explicit.logic@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            explicit.logic@outlook.com
          </a>
        </p>
        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.text}
              >
                <img src={social.icon} alt={social.text} className="size-5" />
                <p>{social.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const ContactWindow = WindowWrapper(Contact, "contact");
