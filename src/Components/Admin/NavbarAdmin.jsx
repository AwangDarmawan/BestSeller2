import {
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";

function NavbarAdmin() {
  const menus = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
    {
      label: "Pesan",
      href: "/admin/pesan",
      icon: (
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
  ];

  return (
    <div className="w-full px-2 py-6   bg-transparent
          backdrop-blur-xl
          border-b border-gold/10 sticky top-0 z-50">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/20
                  bg-gradient-to-r
             from-[#3f8671]
              to-[#25c9a5]
                text-white
                p-3
                transition-all
                duration-300
                hover:bg-[#9EB8B0]
                hover:scale-105
                shadow-lg
              "
            >
              {menu.icon}

              <span
                className="
                  text-xs
                  sm:text-sm
                  
                  font-serif
                "
              >
                {menu.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;