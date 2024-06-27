document.addEventListener("DOMContentLoaded", function (event) {
  const showSidebar = (toggleId, sideId, bodyId, asideId) => {
    const toggle = document.getElementById(toggleId),
      sidebar = document.getElementById(sideId),
      bodypd = document.getElementById(bodyId),
      asidepd = document.getElementById(asideId);

    // Validate that all variables exist
    if (toggle && sidebar && bodypd && asidepd) {
      toggle.addEventListener("click", () => {
        // show navbar
        sidebar.classList.toggle("show");
        // change icon
        toggle.classList.toggle("fa");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        asidepd.classList.toggle("body-pd");
      });
    }
  };

  showSidebar("aside-toggle", "sidebar", "body-pd", "aside");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".side_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});
