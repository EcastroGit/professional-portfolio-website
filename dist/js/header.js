const header = document.querySelector("#header");

header.innerHTML = `
  <div class="menu-btn">
    <span class="menu-btn__burger"></span>
  </div>

  <nav class="nav">
    <ul class="menu-nav">
      <li class="menu-nav__item">
        <a href="index.html" class="menu-nav__link"> Home </a>
      </li>
      <li class="menu-nav__item">
        <a href="experience.html" class="menu-nav__link"> Experience </a>
      </li>
      <li class="menu-nav__item">
        <a href="portfolio.html" class="menu-nav__link"> Portfolio </a>
      </li>
      <li class="menu-nav__item">
        <a href="contact.html" class="menu-nav__link"> Contact </a>
      </li>
    </ul>
  </nav>
`;
