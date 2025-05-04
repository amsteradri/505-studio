import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { 
  FaCog, 
  FaFolderOpen, 
  FaPlus, 
  FaTags, 
  FaArrowLeft, 
  FaChartBar,
  FaEllipsisH,
  FaClock,
  FaUserFriends,
  FaChevronRight
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

// Mock de proyectos
const mockProjects: Project[] = [
  {
    id: 1,
    name: "Rediseño Landing Page",
    status: "En trabajo", // Coincide con el tipo literal
    members: ["Carlos", "María"],
    description: "Rediseño completo de la landing para aumentar conversiones.",
    progress: 65,
    dueDate: "18 Mayo",
  },
  {
    id: 2,
    name: "Integración API Pago",
    status: "Esperando", // Coincide con el tipo literal
    members: ["Lucía", "Pedro"],
    description: "Integración de Stripe para pagos con tarjeta.",
    progress: 25,
    dueDate: "30 Mayo",
  },
  {
    id: 3,
    name: "Dashboard Administrativo",
    status: "Acabado", // Coincide con el tipo literal
    members: ["Ana", "Jorge"],
    description: "Panel de control para gestionar usuarios y contenido.",
    progress: 100,
    dueDate: "Completado",
  },
];

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Projects");

  return (
    <div className="min-h-screen flex bg-[#0f172a]"> {/* Fondo azul oscuro para toda la app */}
      {/* Sidebar moderna y profesional */}
      <aside className="w-72 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white relative overflow-hidden border-r border-white/5">
        {/* Efecto de degradado en el fondo */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        
        {/* Logo y nombre */}
        <div className="p-8 border-b border-white/10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#e0e0e0] to-[#a0a0a0] text-transparent bg-clip-text flex items-center">
            <span className="mr-2 bg-white/10 p-2 rounded-lg">
              <FaChartBar className="text-[#60a5fa]" />
            </span>
            Dashboard
          </h2>
        </div>
        
        {/* Navegación */}
        <nav className="py-6 px-4">
          <div className="mb-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Principal
          </div>
          <div className="space-y-1">
            <NavItem 
              icon={<FaFolderOpen />} 
              label="Projects" 
              active={activeItem === "Projects"}
              onClick={() => setActiveItem("Projects")}
            />
            <NavItem 
              icon={<FaPlus />} 
              label="New Project" 
              active={activeItem === "New Project"}
              onClick={() => setActiveItem("New Project")}
            />
          </div>
          
          <div className="mt-8 mb-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Configuración
          </div>
          <div className="space-y-1">
            <NavItem 
              icon={<FaTags />} 
              label="Prices" 
              active={activeItem === "Prices"}
              onClick={() => setActiveItem("Prices")}
            />
            <NavItem 
              icon={<FaCog />} 
              label="Settings" 
              active={activeItem === "Settings"}
              onClick={() => setActiveItem("Settings")}
            />
          </div>
        </nav>
        
        {/* Separador con efecto de degradado */}
        <div className="px-6 my-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"></div>
        </div>
        
        {/* Botón de regreso con efecto hover moderno */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link
            href="/"
            className="group flex items-center gap-3 py-3 px-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="p-2 rounded-lg bg-gray-700/50 group-hover:bg-[#60a5fa]/20 transition-all duration-300">
              <FaArrowLeft className="text-sm text-gray-400 group-hover:text-[#60a5fa] transition-colors duration-300" />
            </span>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              Volver a Inicio
            </span>
          </Link>
        </div>
      </aside>

      {/* Main content - Rediseñado */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header con efecto de glassmorphism */}
        <header className="mb-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Panel de Proyectos
            </h1>
            <p className="text-gray-400 mt-1">
              Gestiona tus proyectos y seguimiento de progreso
            </p>
          </div>
          
          {/* Botón de acción principal */}
          <button className="px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white rounded-xl shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <FaPlus className="text-sm" />
            <span>Nuevo Proyecto</span>
          </button>
        </header>
        
        {/* Resumen de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Proyectos Activos" 
            value="7" 
            change="+2" 
            positive={true} 
            icon={<FaFolderOpen />} 
            color="blue"
          />
          <StatCard 
            title="En Progreso" 
            value="3" 
            change="-1" 
            positive={false} 
            icon={<FaClock />} 
            color="amber"
          />
          <StatCard 
            title="Equipo" 
            value="12" 
            change="+4" 
            positive={true} 
            icon={<FaUserFriends />} 
            color="emerald"
          />
        </div>
        
        {/* Filtro de proyectos */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex gap-4 shadow-lg">
            <button className="px-4 py-2 rounded-lg bg-[#3b82f6] text-white text-sm font-medium">
              Todos
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors">
              En Progreso
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors">
              Completados
            </button>
          </div>
          
          <div className="ml-auto">
            <select className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] shadow-lg appearance-none cursor-pointer">
              <option>Ordenar por</option>
              <option>Fecha de creación</option>
              <option>Progreso</option>
              <option>Alfabético</option>
            </select>
          </div>
        </div>
        
        {/* Lista de proyectos con diseño moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* Tarjeta para añadir nuevo proyecto con efecto de hover */}
          <div className="group relative min-h-[250px] rounded-2xl border border-dashed border-white/20 flex flex-col items-center justify-center p-6 cursor-pointer hover:border-[#3b82f6]/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#3b82f6]/20 mb-4 transition-all duration-300">
              <FaPlus className="text-xl text-gray-400 group-hover:text-[#3b82f6] transition-colors duration-300" />
            </div>
            <p className="text-gray-400 group-hover:text-white font-medium transition-colors duration-300">Añadir Proyecto</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Componente de tarjeta de estadísticas
interface StatCardProps {
  title: string;
  value: string | number;
  change: string | number;
  positive: boolean;
  icon: React.ReactNode;
  color: 'blue' | 'amber' | 'emerald';
}

function StatCard({ title, value, change, positive, icon, color }: StatCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'blue': return { bgLight: 'bg-blue-500/10', text: 'text-blue-500' };
      case 'amber': return { bgLight: 'bg-amber-500/10', text: 'text-amber-500' };
      case 'emerald': return { bgLight: 'bg-emerald-500/10', text: 'text-emerald-500' };
      default: return { bgLight: 'bg-blue-500/10', text: 'text-blue-500' };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses.bgLight}`}>
          <span className={`text-lg ${colorClasses.text}`}>{icon}</span>
        </div>
        <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${positive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          {change}
          {positive ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-6 6a1 1 0 001-1V9a1 1 0 00-1-1H5a1 1 0 00-1 1v3a1 1 0 001 1h1zm8 0a1 1 0 001-1V9a1 1 0 00-1-1h-1a1 1 0 00-1 1v3a1 1 0 001 1h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 13a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2a1 1 0 011 1v1zm-6-6a1 1 0 001-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v3a1 1 0 001 1h1zm8 0a1 1 0 001-1V3a1 1 0 00-1-1h-1a1 1 0 00-1 1v3a1 1 0 001 1h1z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

// Componente de tarjeta de proyecto
interface Project {
  id: number;
  name: string;
  status: 'En trabajo' | 'Esperando' | 'Acabado';
  members: string[];
  description: string;
  progress: number;
  dueDate: string;
}

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    "En trabajo": { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20" },
    "Esperando": { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20" },
    "Acabado": { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20" }
  };

  const colors = statusColors[project.status as keyof typeof statusColors];

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden group hover:shadow-xl hover:border-white/20 transition-all duration-300">
      {/* Barra de estado superior con degradado */}
      <div className={`h-1 w-full ${colors.bg} relative overflow-hidden`}>
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r from-transparent to-${colors.text.replace('text-', '')}`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      
      <div className="p-6">
        {/* Cabecera con estado y menú */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border}`}>
            {project.status}
          </span>
          <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
            <FaEllipsisH className="text-sm" />
          </button>
        </div>
        
        {/* Título y descripción */}
        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-300">
          {project.name}
        </h2>
        <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
        
        {/* Barra de progreso */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-400">Progreso</span>
            <span className="text-xs font-medium text-white">{project.progress}%</span>
          </div>
          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div 
              className={`h-full ${
                project.progress < 30 ? 'bg-red-500' : 
                project.progress < 70 ? 'bg-amber-500' : 
                'bg-emerald-500'
              }`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Footer con fecha y miembros */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-white/5">
              <FaClock className="text-xs text-gray-400" />
            </span>
            <span className="text-xs text-gray-400">{project.dueDate}</span>
          </div>
          
          <div className="flex -space-x-2">
            {project.members.map((member: string, index: number) => (
              <div 
                key={index}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] flex items-center justify-center text-xs font-medium text-white border-2 border-[#0f172a]"
              >
                {member.charAt(0)}
              </div>
            ))}
          </div>
        </div>
        
        {/* Botón ver detalles con efecto hover */}
        <button className="mt-6 w-full py-3 rounded-xl flex items-center justify-center gap-2 bg-white/5 text-gray-300 hover:bg-[#3b82f6] hover:text-white transition-all duration-300 group-hover:shadow-lg">
          <span>Ver Detalles</span>
          <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}

function NavItem({ 
  icon, 
  label, 
  active = false, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-300
        ${active 
          ? "bg-[#60a5fa]/10 text-white" 
          : "text-gray-400 hover:text-white hover:bg-white/5"}
      `}
    >
      <span className={`
        p-2 rounded-lg transition-all duration-300
        ${active 
          ? "bg-[#60a5fa]/20 text-[#60a5fa]" 
          : "text-gray-400 group-hover:text-white"}
      `}>
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
      
      {/* Indicador de elemento activo */}
      {active && (
        <div className="ml-auto h-2 w-2 rounded-full bg-[#60a5fa]"></div>
      )}
    </div>
  );
}



// Protección del dashboard
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};