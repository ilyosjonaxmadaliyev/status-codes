// Assalomu alaykum bu vazifani menimcha qila olmadim chunki status code ni olish uchun cors ruxsati so'ralyapti.
// Buni faqat backenddan tog'irlaydiku.
// Hask yo'llarini bilmayman. Men rosa izlandim lekin topa olmadim.
// Brauserimda extension orqali corsni o'chirdim lekin sizda qanday ko'rsatadi bilmayman.
// Shuning uchun qaytgan xatolikni chiqarib qoyaqoldim.
// Iltimos qabul qilinmagan taqdirimda shu ishning yechimi bilan o'rtoqlashsangiz chunki juda qiziq!

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function StstusCard({ image, title, link }) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(link);

        if (response.status !== 200) {
          throw new Error(data.statusText);
        }

        setData(response);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);

  const color = data ? "text-blue-800" : "text-red-900";

  return (
    <div className="bg-slate-200 p-2 border border-gray-900 rounded-xl flex items-center justify-center flex-col">
      <img src={image} alt="logo" className="w-28 h-28 rounded-full mb-2" />
      <a href={link}>
        <h3
          className={`text-blue-900 text-2xl font-semibold mb-2 hover:text-blue-600 capitalize`}
        >
          {title}
        </h3>
      </a>

      <h5 className="text-xl text-slate-900">
        Ststus code is:{" "}
        <span className={`${color} font-bold text-lg`}>
          {data ? data.status : error}
        </span>
        <span className={`${color} font-bold text-base`}>
          {data.status === 200 ? " (OK)" : ""}
        </span>
      </h5>
    </div>
  );
}

export default StstusCard;
