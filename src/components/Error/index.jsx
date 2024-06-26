import { Link } from 'react-router-dom'
import Error404 from '../../assets/404.svg'
import './index.scss'

function Error() {
    return (
        <div className={'errorWrapper'}>
            <img className={'errorImg'} src={Error404} alt={'Erreur 404'} />
            <h1 className={'errorSubtitle'}>
                La page que vous demandez n'existe pas
            </h1>
            <Link
                className={'errorHomeLink'}
                to="/"
                onClick={() => {
                    window.scroll(0, 0)
                }}
            >
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}

export default Error
