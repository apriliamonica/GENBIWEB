import { Clock } from "lucide-react";

export default function Pendaftaran() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-bi-blue to-bi-light-blue rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Clock className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Pendaftaran anggota baru akan segera dibuka
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500">
              Pantau terus media sosial kami untuk informasi terbaru
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

