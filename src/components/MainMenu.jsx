import React, { useState } from "react";
import {
  DashboardIcon,
  ApplicationsIcon,
  ClientsIcon,
  ProjectsIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  IntegrationsIcon,
  UsersIcon,
  SettingsIcon,
} from "./icons/MainMenuIcons";

export default function MainMenu() {
  const [openMenu, setOpenMenu] = useState("Projects");
  const [openSubmenu, setOpenSubmenu] = useState({Projects: "Coca Cola Project"});

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSubmenuClick = (menu, submenu) => {
    setOpenSubmenu((prev) => ({
      ...prev,
      [menu]: prev[menu] === submenu ? null : submenu,
    }));
  };

  return (
    <aside className="md:w-62 lg:w-72 hidden md:flex flex-col px-4 py-8 gap-10">
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
          Main Menu
        </p>
        <nav className="space-y-1">
          <MenuItem
            icon={<DashboardIcon />}
            label="Dashboard"
            isActive={openMenu === "Dashboard"}
            onClick={() => handleMenuClick("Dashboard")}
          />
          <MenuItem
            icon={<ApplicationsIcon />}
            label="Applications"
            isActive={openMenu === "Applications"}
            onClick={() => handleMenuClick("Applications")}
          />
          <MenuItem
            icon={<ClientsIcon />}
            label="Clients"
            badge="2"
            isActive={openMenu === "Clients"}
            onClick={() => handleMenuClick("Clients")}
          />
          {openMenu === "Projects" ? (
            <div className="border border-gray-200 rounded-lg">
              <MenuItem
                icon={<ProjectsIcon />}
                label="Projects"
                isActive
                onClick={() => handleMenuClick("Projects")}
              />
              <SubMenu
                items={[
                  "Coca Cola Project",
                  "Zoom Projects",
                  "Task Board",
                  "Project Diagramma",
                ]}
                parentKey="Projects"
                openSubmenu={openSubmenu}
                onSubmenuClick={handleSubmenuClick}
              />
            </div>
          ) : (
            <MenuItem
              icon={<ProjectsIcon />}
              label="Projects"
              isActive={false}
              onClick={() => handleMenuClick("Projects")}
            />
          )}
          <MenuItem
            icon={<ApplicationsIcon />}
            label="Applications"
            isActive={openMenu === "Applications"}
            onClick={() => handleMenuClick("Applications")}
          />
        </nav>
      </div>  
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
          Second Menu
        </p>
        <nav className="space-y-1">
          <MenuItem
            icon={<IntegrationsIcon />}
            label="Integrations"
            isActive={openMenu === "Integrations"}
            onClick={() => handleMenuClick("Integrations")}
          />
          <MenuItem
            icon={<UsersIcon />}
            label="Users"
            isActive={openMenu === "Users"}
            onClick={() => handleMenuClick("Users")}
          />
          <MenuItem
            icon={<SettingsIcon />}
            label="Settings"
            isActive={openMenu === "Settings"}
            onClick={() => handleMenuClick("Settings")}
          />
        </nav>
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, badge, isActive, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-md text-sm font-medium cursor-pointer
          ${
            isActive
              ? "bg-white circle-shadow text-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }
        `}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="flex-shrink-0">{icon}</span>
        <span className="ml-3 flex-1 text-left">{label}</span>
      </div>
      {badge && (
        <span className="ml-auto mr-3 text-[8px] font-black bg-[#3361FF] w-[20px] h-[20px] flex justify-center items-center text-white text-xs font-semibold rounded-full px-2">
          {badge}
        </span>
      )}
      <span>{isActive ? <ChevronDownIcon /> : <ChevronRightIcon />}</span>
    </div>
  );
}

function SubMenu({ items, parentKey, openSubmenu, onSubmenuClick }) {
  const commonClasses = "flex items-center text-sm cursor-pointer py-2 px-4";
  const subitems = [
    "Link Colors",
    "Additional Content",
    "Dismissing",
    "Java Script Behavior",
  ];

  return (
    <div className="m-4 space-y-1 rounded-lg">
      {items.map((item) => {
        const isOpen = openSubmenu[parentKey] === item;
        return (
          <div key={item}>
            <div
              className={`${commonClasses} ${
                isOpen
                  ? "text-blue-600 bg-white font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              } flex justify-between py-4`}
              onClick={() => onSubmenuClick(parentKey, item)}
            >
              <div className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    isOpen ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
                <span className="ml-2 flex-1 text-left">{item}</span>
              </div>
              <span>{isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}</span>
            </div>
            {isOpen && (
              <div className="space-y-1 bg-white p-4 border-t-[2px]  border-t-gray-200">
                {subitems.map((sub) => (
                  <div
                    key={sub}
                    className="flex items-center text-sm text-gray-500 hover:text-gray-700 p-2"
                  >
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-2" />
                    <span>{sub}</span>
                    <span className="ml-auto">
                      <ChevronRightIcon />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
