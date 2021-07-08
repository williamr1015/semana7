import logoA from "../assets/img/logo ALTERFLIX.png";
const Header = () => {
    const view = `
<header class="navbar-header">
    <span>
      <span>
        <a class="Gov-co" href="#">Ir a Gov.co</a>
        <img src="${logoA}" alt="logoALTERFLIX">
      </span>
    </span>
</header>
`
    return view
}

export default Header