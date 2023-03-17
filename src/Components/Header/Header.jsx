import './Header.module.css'
/*rq: pas besoin d'import style from ..., car le fichier moduele.css 
* n'utilise pas de classe, style aliqué que sur balises header et h1 donc pas besoin de style.nomclass...
*/


const Header = () => {

  return (
    <header>
      <h1>Todo List</h1>
    </header>
  )
}

export default Header;