import StstusCard from "./StstusCard";
import { goole, yandex, instagram, vk, twitter, twitter1 } from "../Logos";

const links = [
  { images: goole, names: "goole", link: "https://www.google.com/" },
  { images: yandex, names: "yandex", link: "https://ya.ru/" },
  { images: instagram, names: "instagram", link: "https://www.instagram.com/" },
  { images: vk, names: "vk", link: "https://www.vk.com/" },
  { images: twitter, names: "twitter", link: "https://twitter.com/" },
  { images: twitter1, names: "twitter1", link: "https://twitter1.com/" },
];
function Main() {
  return (
    <>
      <div className="flex flex-col items-center pt-6 bg-image">
        <h1 className="text-center font-semibold text-blue-900  text-4xl sm:text-5xl md:text-6xl pb-8 sm:pb-14 md:pb-28">
          Status of servers
        </h1>
        <div className="my-container grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {links.map((link) => {
            return (
              <StstusCard
                key={link.names}
                title={link.names}
                image={link.images}
                link={link.link}
              />
            );
          })}
        </div>
        <p className="bottom-0 mb-2 mt-10 text-black bg-white/50 font-semibold p-1 rounded-md">
          © Developed by
          <span className="text-blue-950 hover:text-blue-600">
            <a href="https:/t.me/ilyosaxmadali"> IlyosAxmadAli</a>
          </span>
        </p>
      </div>
    </>
  );
}

export default Main;
