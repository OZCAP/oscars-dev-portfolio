//@ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ContentLoader() {
    return(
        <div className="h-screen flex dark:bg-slate-700 text-slate-600 dark:text-slate-100">
            <div className="m-auto">
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" width={100}/>
            </div>
        </div>
    );
}