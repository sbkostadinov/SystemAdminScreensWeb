export default function UserName({children, selectSetUserName}) {
    return (

        <li>
           <button onClick={selectSetUserName}>{children}</button>    
        </li>

    );
}


export { UserName } from './UserName.jsx';
