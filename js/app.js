// Main App Initializer
document.addEventListener("DOMContentLoaded", function () {
  // Render components
  renderHeader();
  renderFooter();

  // Setup routes
  Router.add("/", renderHomePage);
  Router.add("/tentang-kami", renderTentangKamiPage);
  Router.add("/divisi", renderDivisiPage);
  Router.add("/program-kerja", renderProgramKerjaPage);
  Router.add("/berita", renderBeritaPage);
  Router.add("/galeri", renderGaleriPage);
  Router.add("/pendaftaran", renderPendaftaranPage);
  Router.add("/kontak", renderKontakPage);

  // Initialize router
  Router.init();
});
