import { useEffect, useState } from "react";


import { Trash2 } from "lucide-react";
import { DeleteAllData, DeleteData, getData } from "../../Services/Api";

function PesanAdmin() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET DATA
    async function fetchPesan() {
    try {
      

      const result = await getData();
    
      setDatas(result);
    //   console.log("resul2",result)
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
   useEffect(() => {
    fetchPesan();
  }, []);

  // DELETE SATU
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus pesan ini?"
      );

      if (!confirmDelete) return;

      await DeleteData(id);

      setDatas((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus pesan");
    }
  };

  // DELETE SEMUA
  const handleDeleteAll = async () => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus semua pesan?"
      );

      if (!confirmDelete) return;

      await DeleteAllData();

      setDatas([]);
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus semua pesan");
    }
  };

  return (
      <section
    className="
      min-h-screen
     
      px-4
      sm:px-6
      py-12
    "
  >
    <div className="max-w-5xl mx-auto lg:px-[330px]">

      {/* Heading */}
      <div className="text-center mb-10">
        <p
          data-aos="fade-up"
          className="
           font-serif text-[11px] uppercase tracking-[0.35em] text-[#3f8671]
              
          "
        >
          Wedding Wishes
        </p>

        <h2
          data-aos="zoom-in"
          className="
             font-tangerine  font-semibold text-4xl text-[#3f8671] sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl
          "
        >
          Pesan Masuk
        </h2>

        <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full" />
      </div>

      {/* Card */}
      <div
        className="
          w-full
         
          
          p-4
          sm:p-6
          md:p-8
        "
      >
        {/* Statistik */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            justify-between
            mb-6
          "
        >
          <span
            className="
                bg-gradient-to-r
             from-[#3f8671]
              to-[#25c9a5]
              text-white
              px-4
              py-3
              rounded-lg
              text-center
              font-serif
              
            "
          >
            Total Pesan : {datas.length}
          </span>

          <button
            onClick={handleDeleteAll}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-4
              py-3
              rounded-lg
              transition
              font-serif
            "
          >
            Hapus Semua
          </button>
        </div>

        {/* List Pesan */}
        <div className="max-h-[550px] overflow-y-auto space-y-4 custom-scrollbar pr-2">
          {loading ? (
            <div className="text-center py-10">
              Loading...
            </div>
          ) : datas.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Belum ada pesan
            </div>
          ) : (
            datas.map((item) => (
              <div
                key={item.id}
                className="
                   
                  border
                  border-pink-100
                  rounded-xl
                  p-4
                
                shadow-[0_8px_32px_rgba(158,184,176,0.25)]
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    gap-4
                  "
                >
                  {/* Isi Pesan */}
                  <div className="flex-1 break-words bg">
                    <h4
                      className="
                       text-2xl font-semibold font-tangerine text-[#36554C]
                      "
                    >
                      {item.nama}
                    </h4>

                    <p
                     className="mt-3 font-serif leading-7 text-gray-600 break-words"
                    >
                      {item.pesan}
                    </p>
                  </div>

                  {/* Kehadiran + Delete */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      md:justify-end
                      gap-3
                    "
                  >
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        ${
                          item.kehadiran === "Ya"
                            ? "bg-green-100 text-green-700"
                            : item.kehadiran === "Mungkin"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {item.kehadiran}
                    </span>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        p-2
                        rounded-lg
                        transition
                        
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </section>
  )}

export default PesanAdmin;