
import './Header.css';
export function Header(){
    return(
        <header>
            
            <div className='top-header'>
                <h1><a href=""><img src="assets/android-chrome-192x192.png" alt="" /></a></h1>
            </div>

            <div className='mid-header'>
                <div className="menu">
                    <a href="menu.php"><span>Menu</span></a>
                    <ul>
                        <li><a href="page.php">Contatos</a></li>
                        <li><a href="page.php">Grupos</a></li>
                        <li><a href="page.php">Segmentos</a></li>
                    </ul>
                </div>

                <form>
                    <input placeholder="Busca" name="" type="text" />
                    <input type="submit" value="Procurar" />
                </form>

                <a href="page.php">Meu Perfil</a>
            </div>

            <div className='bottom-header'>
                <ul>
                    <li><a href="page.php">Facebook</a></li>
                    <li><a href="page.php">Twitter</a></li>
                    <li><a href="page.php">LinkedIn</a></li>
                </ul>
            </div>

        </header>
    )
}

